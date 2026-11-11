// src/app/writing/page.tsx

import React from "react";
import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui";
import WritingIndex from "@/components/WritingIndex";
import { categoriesOf, formatStamp, getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Notes — Hector A. Rodriguez",
  description:
    "Essays and shorter notes on AI, education, ethics — and the occasional detour.",
};

export default function WritingPage() {
  const posts = getPosts();

  return (
    <>
      <section className="mx-auto grid max-w-[1280px] gap-10 px-6 pb-10 pt-16 md:px-11 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-[60px]">
        <div>
          <Eyebrow className="mb-[22px]">01 / WRITING</Eyebrow>
          <h1 className="font-display text-[40px] font-normal leading-[1.02] tracking-[-0.02em] md:text-[58px]">
            Notes
          </h1>
        </div>
        <p className="mb-1.5 text-base leading-[1.7] text-ink-2 text-pretty">
          Essays and shorter notes on AI, education, ethics — and the occasional
          detour into how we decided speed was the point.
        </p>
      </section>

      <div className="mx-auto max-w-[1280px]">
        {posts.length ? (
          <WritingIndex
            categories={categoriesOf(posts)}
            posts={posts.map((post) => ({
              slug: post.slug,
              title: post.title,
              excerpt: post.excerpt,
              category: post.category,
              readMinutes: post.readMinutes,
              stamp: formatStamp(post.publishedAt),
            }))}
          />
        ) : (
          <p className="border-t border-line px-6 py-16 text-ink-2 md:px-11">
            Nothing published yet.
          </p>
        )}
      </div>
    </>
  );
}
