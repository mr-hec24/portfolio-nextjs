import "server-only";

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  title: string;
  excerpt: string | null;
  body: string;
  category: string;
  readMinutes: number;
  publishedAt: string | null;
  /** Canonical LinkedIn URL, when the piece was first published there. */
  linkedin: string | null;
};

/**
 * Articles are plain markdown files in content/posts, read at build time.
 * Adding one is: drop in a .md file, commit, push. No database, no env vars,
 * no runtime fetch — every page ships as static HTML.
 */
const CONTENT_DIR = path.join(process.cwd(), "content", "posts");

/** ~200 wpm, the usual rule of thumb. Always at least 1. */
export function readingTime(body: string): number {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function byNewest(a: Post, b: Post) {
  const at = a.publishedAt ? Date.parse(a.publishedAt) : 0;
  const bt = b.publishedAt ? Date.parse(b.publishedAt) : 0;
  return bt - at;
}

function readAll(): Post[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const posts: Post[] = [];

  for (const file of fs.readdirSync(CONTENT_DIR)) {
    if (!file.endsWith(".md")) continue;

    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
    const { data, content } = matter(raw);

    // status: draft keeps a work-in-progress in the repo without publishing it.
    if (String(data.status ?? "published") !== "published") continue;

    posts.push({
      slug: String(data.slug ?? file.replace(/\.md$/, "")),
      title: String(data.title ?? "Untitled"),
      excerpt: data.excerpt ? String(data.excerpt) : null,
      body: content,
      category: String(data.category ?? "notes").toLowerCase(),
      readMinutes: data.read_minutes
        ? Number(data.read_minutes)
        : readingTime(content),
      publishedAt: data.published_at
        ? new Date(data.published_at).toISOString()
        : null,
      linkedin: data.linkedin ? String(data.linkedin) : null,
    });
  }

  return posts.sort(byNewest);
}

export function getPosts(): Post[] {
  return readAll();
}

export function getPost(slug: string): Post | null {
  return readAll().find((post) => post.slug === slug) ?? null;
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
