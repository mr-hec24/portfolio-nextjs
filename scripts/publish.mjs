#!/usr/bin/env node
/**
 * Publish a markdown file to Supabase.
 *
 *   npm run publish content/posts/hard-reset.md
 *   npm run publish ~/Documents/drafts/anything.md --draft
 *
 * Write wherever you like (Obsidian, iA Writer, Notion export, plain vim) as
 * long as the file starts with YAML frontmatter:
 *
 *   ---
 *   title: "All Models Are Wrong… But Some Wreck Lives"
 *   slug: all-models-are-wrong      # optional, defaults to the filename
 *   category: ethics
 *   published_at: 2026-06-14        # optional, defaults to today
 *   excerpt: "One line under the title."
 *   ---
 *
 * Upserts on slug, so re-running the same file edits the post in place rather
 * than creating a duplicate. Requires SUPABASE_SERVICE_ROLE_KEY — that key
 * bypasses RLS and must never be committed or exposed to the browser.
 */

import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import matter from "gray-matter";
import { createClient } from "@supabase/supabase-js";

// Load .env.local without adding a dependency.
for (const envFile of [".env.local", ".env"]) {
  const full = path.join(process.cwd(), envFile);
  if (!fs.existsSync(full)) continue;
  for (const line of fs.readFileSync(full, "utf8").split("\n")) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (!match) continue;
    const key = match[1];
    if (process.env[key] !== undefined) continue;
    process.env[key] = (match[2] ?? "").replace(/^["']|["']$/g, "").trim();
  }
}

const args = process.argv.slice(2);
const file = args.find((a) => !a.startsWith("--"));
const asDraft = args.includes("--draft");

function die(message) {
  console.error(`\n  ✗ ${message}\n`);
  process.exit(1);
}

if (!file) die("Usage: npm run publish <file.md> [--draft]");
if (!fs.existsSync(file)) die(`No such file: ${file}`);

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_KEY) {
  die(
    "Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local\n" +
      "    (Supabase dashboard → Project Settings → API)"
  );
}

const { data: front, content } = matter(fs.readFileSync(file, "utf8"));

if (!front.title) die(`${file} is missing a "title" in its frontmatter`);
if (!content.trim()) die(`${file} has no body content`);

const slug = String(
  front.slug ??
    path
      .basename(file, ".md")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
);

const words = content.trim().split(/\s+/).filter(Boolean).length;

const row = {
  slug,
  title: String(front.title),
  excerpt: front.excerpt ? String(front.excerpt) : null,
  body: content.trim(),
  category: String(front.category ?? "notes").toLowerCase(),
  read_minutes: front.read_minutes
    ? Number(front.read_minutes)
    : Math.max(1, Math.round(words / 200)),
  status: asDraft ? "draft" : "published",
  published_at: new Date(front.published_at ?? Date.now()).toISOString(),
};

const supabase = createClient(SUPABASE_URL, SERVICE_KEY, {
  auth: { persistSession: false },
});

const { error } = await supabase
  .from("posts")
  .upsert(row, { onConflict: "slug" });

if (error) die(`Supabase rejected the upsert: ${error.message}`);

console.log(`\n  ✓ ${row.status === "draft" ? "Saved draft" : "Published"}: ${row.title}`);
console.log(`    /writing/${slug}  ·  ${row.category}  ·  ${row.read_minutes} min\n`);

// Bust the cache so the change is live immediately.
const site = process.env.SITE_URL;
const secret = process.env.REVALIDATE_SECRET;

if (site && secret) {
  try {
    const res = await fetch(`${site.replace(/\/$/, "")}/api/revalidate`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-revalidate-secret": secret,
      },
      body: JSON.stringify({ slug }),
    });
    console.log(
      res.ok
        ? "    Cache refreshed.\n"
        : `    Cache refresh failed (${res.status}) — the post appears within 60s anyway.\n`
    );
  } catch (err) {
    console.log(`    Cache refresh failed (${err.message}) — live within 60s anyway.\n`);
  }
} else {
  console.log("    Set SITE_URL + REVALIDATE_SECRET for instant refresh (else ~60s).\n");
}
