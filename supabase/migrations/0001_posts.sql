-- Writing / Notes storage for the portfolio.
--
-- Design goals:
--   * The public site reads published posts anonymously (anon key, RLS-gated).
--   * Only the service-role key (used by scripts/publish.mjs, never shipped to
--     the browser) can insert or update. There is no write path from the site.
--   * Drafts are invisible to the public until status flips to 'published'.

create extension if not exists "pgcrypto";

create table if not exists public.posts (
  id            uuid primary key default gen_random_uuid(),

  slug          text not null unique,
  title         text not null,
  excerpt       text,
  body          text not null,                 -- markdown

  category      text not null default 'notes',
  -- Optional override. When null the site computes reading time from body.
  read_minutes  integer,

  status        text not null default 'draft'
                  check (status in ('draft', 'published')),
  published_at  timestamptz,

  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- A post is only publicly visible once it is published AND its publish date has
-- arrived. That second condition is what makes scheduling posts possible.
create index if not exists posts_public_idx
  on public.posts (published_at desc)
  where status = 'published';

create index if not exists posts_category_idx on public.posts (category);

-- Keep updated_at honest.
create or replace function public.touch_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists posts_touch_updated_at on public.posts;
create trigger posts_touch_updated_at
  before update on public.posts
  for each row execute function public.touch_updated_at();

-- ---------------------------------------------------------------------------
-- Row level security
-- ---------------------------------------------------------------------------

alter table public.posts enable row level security;

-- Anonymous + authenticated visitors may read published posts only.
drop policy if exists "published posts are public" on public.posts;
create policy "published posts are public"
  on public.posts
  for select
  to anon, authenticated
  using (
    status = 'published'
    and published_at is not null
    and published_at <= now()
  );

-- No insert/update/delete policies exist on purpose: the service-role key
-- bypasses RLS entirely, so publishing works from the CLI while the anon key
-- the browser holds can never write.
