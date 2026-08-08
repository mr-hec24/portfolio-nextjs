# Adding an article

Articles are markdown files in `content/posts/`. To publish one:

1. Add a `.md` file to `content/posts/`
2. Commit and push

That's it. The host rebuilds and the article is live in about a minute.

**You don't need to create a page for each article.** `/writing/[slug]` already
renders any post, and `/writing` lists them automatically. One file per article
is the whole job — no route, no component, no config.

---

## The file

The filename becomes the URL: `hard-reset.md` → `/writing/hard-reset`.

```markdown
---
title: "On A Mission"
category: education
published_at: 2026-02-19
excerpt: "What I'm actually trying to build, and who it's for."
---

Your article in normal markdown. Headings, **bold**, _italics_,
[links](https://example.com), lists, quotes, tables, code blocks and images
are all styled to match the site already.
```

| Field | Required | Notes |
| --- | --- | --- |
| `title` | yes | Shown on the index and as the article `<h1>` |
| `category` | no | Defaults to `notes`. Free text — whatever you use becomes a filter chip on `/writing` |
| `published_at` | no | Sorts the index and shows in the date column. Omit and the post sorts last |
| `excerpt` | no | The line under the title. Omit and the index just shows the title |
| `slug` | no | Defaults to the filename |
| `read_minutes` | no | Computed at ~200 wpm. Set it only to override |
| `status` | no | Set to `draft` to keep a file in the repo without publishing it |

Ordering is by `published_at`, newest first — the dates are what the index and
the newer/older links go by, so keep them roughly honest.

---

## Notes

**Drafts.** `status: draft` leaves the file in the repo but off the site
entirely — no page is generated, and it doesn't appear on the index. Flip to
`published` when it's ready.

**Scheduling doesn't work**, and can't without a database. A future
`published_at` still publishes immediately, because the site is built once and
served statically. If you want to hold something back, use `status: draft`.

**Images.** Put them in `public/images/writing/` and reference them as
`![alt](/images/writing/thing.png)`. They get a hairline border to match the
rest of the site.

**Renaming a file changes its URL** and breaks any existing link to it. If a
post has been shared anywhere, keep the filename and change the `title`
instead — or set an explicit `slug` to pin the old URL.

**The three seed files** in `content/posts/` carry the real titles from the
design but placeholder bodies. Replace the body text as you migrate each one.
`hard-reset.md` also has an empty `excerpt` on purpose — the design's sample
description for it was about leaving a classroom, which isn't your background,
so it needs a line of your own.
