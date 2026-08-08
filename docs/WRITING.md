# Publishing writing without a pull request

The short version: **write a markdown file anywhere on your machine, run one
command, it's live in seconds.** No commit, no PR, no redeploy.

```bash
npm run publish ~/Documents/drafts/hard-reset.md
```

---

## How it fits together

```
your editor  →  markdown file  →  npm run publish  →  Supabase (posts table)
                                                            ↓
                                        portfolio reads it with the anon key
                                                            ↓
                                    /api/revalidate busts the cache → live
```

Three pieces:

| Piece | What it does |
| --- | --- |
| `supabase/migrations/0001_posts.sql` | The `posts` table + row-level security |
| `scripts/publish.mjs` | Reads a `.md` file, upserts it into Supabase |
| `src/app/api/revalidate/route.ts` | Makes the new post appear immediately |

**It already works without Supabase.** `src/lib/posts.ts` falls back to markdown
in `content/posts/` when the env vars are missing, so the Writing section is
live from the first deploy. Supabase takes over the moment you configure it —
no code change.

---

## Setup (about 15 minutes, once)

### 1. Pick a project — you almost certainly don't need a new one

**The Supabase free tier limits projects, not tables.** If you already have two
projects, add the `posts` table to one of them rather than paying $25/mo for a
third. A blog table has no foreign keys into app data, gets its own RLS policy,
and adds a few KB of text — it will not interfere with Interleave or Waypoint.

Prefer whichever project sees the most traffic: free projects pause after about
a week of inactivity, and an already-busy database will never be the one that
pauses on you.

If that project already has a table named `posts`, rename this one in the
migration (`portfolio_posts`) and set `NEXT_PUBLIC_POSTS_TABLE` to match.
Nothing else changes.

Only if you genuinely want isolation: [database.new](https://database.new) →
new project. That's the option that costs money at your project count.

### 2. Create the table

Supabase dashboard → **SQL Editor** → paste the whole contents of
`supabase/migrations/0001_posts.sql` → **Run**.

That creates the table, the indexes, an `updated_at` trigger, and the RLS
policy. Read the policy — it's the part that matters:

- The **anon key** (shipped to the browser) can read *only* rows where
  `status = 'published'` and `published_at <= now()`.
- Nothing can write through the anon key. There is deliberately no insert or
  update policy.
- The **service-role key** bypasses RLS. That's how `publish.mjs` writes, and
  it's why that key stays on your laptop.

A useful side effect: because the policy checks `published_at <= now()`,
setting a future date schedules the post.

### 3. Wire up your local env

```bash
cp .env.example .env.local
```

Fill it from **Project Settings → API**:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhb...        # public, safe
SUPABASE_SERVICE_ROLE_KEY=eyJhb...            # SECRET, local only
SITE_URL=https://your-domain.com
REVALIDATE_SECRET=<openssl rand -hex 32>
```

`.env.local` is gitignored. Never commit the service-role key, never give it a
`NEXT_PUBLIC_` prefix, and never paste it into Vercel's client env.

### 4. Add env vars to your host

On Vercel (Settings → Environment Variables) add **only these three**:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `REVALIDATE_SECRET`

The deployed site never needs the service-role key — it only reads.

### 5. Move the three seed posts in

```bash
npm run publish content/posts/all-models-are-wrong.md
npm run publish content/posts/hard-reset.md
npm run publish content/posts/the-hustle-trap.md
```

Once they're in Supabase you can delete `content/posts/` or leave it as an
offline backup. It's only read when Supabase isn't configured.

---

## The day-to-day loop

Write a file with YAML frontmatter on top:

```markdown
---
title: "On A Mission"
category: education
published_at: 2026-02-19
excerpt: "What I'm actually trying to build, and who it's for."
---

Your article, in normal markdown. Headings, **bold**, [links](https://...),
lists, quotes, tables, code blocks — all styled to the site already.
```

Then:

```bash
npm run publish on-a-mission.md            # live now
npm run publish on-a-mission.md --draft    # saved, not visible
```

| Field | Required | Default |
| --- | --- | --- |
| `title` | yes | — |
| `slug` | no | filename, slugified |
| `category` | no | `notes` |
| `excerpt` | no | none (the index just shows the title) |
| `published_at` | no | today; a future date schedules it |
| `read_minutes` | no | computed at ~200 wpm |

Re-running the same file **edits** the post rather than duplicating it — the
upsert keys on `slug`. So fixing a typo is: edit, re-run, done.

Categories are free text. Whatever you use shows up automatically as a filter
chip on `/writing`.

---

## Why this over the alternatives

Two constraints: *don't make me open a PR to publish a paragraph*, and *don't
make me pay for a third Supabase project*. The second is solved by sharing a
database — but here are the alternatives honestly weighed anyway:

**MDX files in the repo.** The usual Next.js answer, and the one to reject
here: every post is a commit, a push, and a redeploy. That's precisely the
workflow you asked to get out of.

**A hosted CMS (Sanity, Contentful).** Genuinely nice editors, but it's another
vendor, another auth system, another schema language, and another bill. For one
author writing essays, it's a lot of surface area.

**Notion as a CMS.** Tempting since you may already write there, but the API is
rate-limited, the block-to-markdown conversion is lossy for anything
non-trivial, and you inherit Notion's uptime for your site's content.

**Neon.** Postgres like Supabase, and its free tier is more generous on
project count if you want the blog genuinely isolated. Because every query here
is server-side, you don't need RLS at all — a connection string in a server env
var is enough. This is the one to switch to if sharing a database ever bothers
you. Cost: a second vendor, and re-doing the auth model.

**Turso (libSQL/SQLite).** Very generous free tier, edge-replicated, fast. A
fine fit technically, but it's a new service and a new client library to learn
for a blog that gets a handful of posts a year.

**Git commits from a script — the strongest zero-infra option.** A publish
script can copy the markdown into `content/posts/`, commit, and push; the host
rebuilds automatically. No database, no vendor, no limits, and content is
version-controlled alongside the code. The catch is a ~40s rebuild per post and
no publishing from a device without the repo. If you ever want to drop the
database entirely, this is the path — the local-markdown reader in
`src/lib/posts.ts` already does exactly this, so it's mostly deleting code.

**Supabase in an existing project — recommended.** Zero new concepts (same
dashboard, same client, same RLS model), zero new cost, and it keeps the
instant-publish behaviour with no redeploy. Postgres means real queries later —
search, tags, related posts, view counts — without migrating to something
bigger. The one real gap is that there's no built-in editor, which is what
`publish.mjs` exists to solve; writing in your own editor beats a web textarea
anyway.

---

## If you'd rather not touch a terminal

Two upgrades, in increasing order of effort. Neither is built yet — say the
word and I'll add whichever fits.

1. **Publish from Supabase's dashboard.** The Table Editor lets you add a row
   by hand today. Set up a **Database Webhook** (Database → Webhooks) on
   insert/update of `posts` pointing at `https://your-site/api/revalidate` with
   the `x-revalidate-secret` header, and the site refreshes itself. Works from
   your phone. Writing long markdown in a table cell is unpleasant, though.

2. **A real `/admin` page on the portfolio.** Supabase Auth (magic link, just
   your email), a markdown editor with live preview in the site's own
   typography, and draft/publish toggles. Maybe half a day's work, and then
   publishing is: open your site, write, hit publish.

---

## Troubleshooting

**A new post doesn't appear.** Check `status` is `published` and `published_at`
isn't in the future. Pages revalidate every 60s, so wait a minute or confirm
the revalidate ping succeeded — the publish script prints whether it did.

**`Supabase rejected the upsert`.** Almost always the service-role key: make
sure you copied the *service_role* one, not *anon*.

**The site shows old posts after switching to Supabase.** The fallback only
kicks in when the env vars are missing or the query errors. Check the server
logs for `[posts] Supabase query failed` — the site deliberately serves local
content rather than 500ing when the database is unreachable.
