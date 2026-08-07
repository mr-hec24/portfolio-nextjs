import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { createClient } from "@supabase/supabase-js";

export type Post = {
  slug: string;
  title: string;
  excerpt: string | null;
  body: string;
  category: string;
  readMinutes: number;
  publishedAt: string | null;
};

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Supabase is the source of truth once it's configured. Until then the site
 * falls back to markdown in content/posts, so the Writing section works from
 * the first deploy and the build never depends on a network call.
 */
export const usingSupabase = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

/** ~200 wpm, the usual rule of thumb. Always at least 1. */
export function readingTime(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

// ---------------------------------------------------------------------------
// Supabase source
// ---------------------------------------------------------------------------

type PostRow = {
  slug: string;
  title: string;
  excerpt: string | null;
  body: string;
  category: string;
  read_minutes: number | null;
  published_at: string | null;
};

function client() {
  return createClient(SUPABASE_URL!, SUPABASE_ANON_KEY!, {
    auth: { persistSession: false },
  });
}

function fromRow(row: PostRow): Post {
  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    body: row.body,
    category: row.category,
    readMinutes: row.read_minutes ?? readingTime(row.body),
    publishedAt: row.published_at,
  };
}

const COLUMNS = "slug,title,excerpt,body,category,read_minutes,published_at";

// ---------------------------------------------------------------------------
// Local markdown source (fallback + seed content)
// ---------------------------------------------------------------------------

const CONTENT_DIR = path.join(process.cwd(), "content", "posts");

function localPosts(): Post[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const posts: Post[] = [];

  for (const file of fs.readdirSync(CONTENT_DIR)) {
    if (!file.endsWith(".md")) continue;

    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
    const { data, content } = matter(raw);

    if (String(data.status ?? "published") !== "published") continue;

    posts.push({
      slug: String(data.slug ?? file.replace(/\.md$/, "")),
      title: String(data.title ?? "Untitled"),
      excerpt: data.excerpt ? String(data.excerpt) : null,
      body: content,
      category: String(data.category ?? "notes"),
      readMinutes: data.read_minutes
        ? Number(data.read_minutes)
        : readingTime(content),
      publishedAt: data.published_at
        ? new Date(data.published_at).toISOString()
        : null,
    });
  }

  return posts.sort(byNewest);
}

function byNewest(a: Post, b: Post) {
  const at = a.publishedAt ? Date.parse(a.publishedAt) : 0;
  const bt = b.publishedAt ? Date.parse(b.publishedAt) : 0;
  return bt - at;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export async function getPosts(): Promise<Post[]> {
  if (!usingSupabase) return localPosts();

  const { data, error } = await client()
    .from("posts")
    .select(COLUMNS)
    .order("published_at", { ascending: false });

  if (error) {
    // Never take the site down because the CMS is unreachable — serve whatever
    // is committed and make the failure visible in the server logs.
    console.error("[posts] Supabase query failed, using local content:", error.message);
    return localPosts();
  }

  return (data as PostRow[]).map(fromRow);
}

export async function getPost(slug: string): Promise<Post | null> {
  if (!usingSupabase) {
    return localPosts().find((post) => post.slug === slug) ?? null;
  }

  const { data, error } = await client()
    .from("posts")
    .select(COLUMNS)
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error("[posts] Supabase query failed, using local content:", error.message);
    return localPosts().find((post) => post.slug === slug) ?? null;
  }

  return data ? fromRow(data as PostRow) : null;
}

/** Categories present in the published set, for the filter row. */
export function categoriesOf(posts: Post[]): string[] {
  return [...new Set(posts.map((post) => post.category))].sort();
}

/** "2026 · JUN 14" — the index's date column format. */
export function formatStamp(iso: string | null): string {
  if (!iso) return "—";
  const d = new Date(iso);
  const month = d
    .toLocaleString("en-US", { month: "short", timeZone: "UTC" })
    .toUpperCase();
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${d.getUTCFullYear()} · ${month} ${day}`;
}

/** "14 June 2026" — the article header format. */
export function formatLongDate(iso: string | null): string {
  if (!iso) return "Unpublished";
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
