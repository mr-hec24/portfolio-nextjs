"use client";

import React from "react";
import Link from "next/link";

export type PostSummary = {
  slug: string;
  title: string;
  excerpt: string | null;
  category: string;
  readMinutes: number;
  stamp: string;
};

/**
 * The writing index list plus its filter row. Per the design's motion notes,
 * rows that don't match collapse (height + opacity, 200ms) rather than
 * disappearing outright.
 */
export default function WritingIndex({
  posts,
  categories,
}: {
  posts: PostSummary[];
  categories: string[];
}) {
  const [active, setActive] = React.useState<string>("ALL");
  const filters = ["ALL", ...categories.map((c) => c.toUpperCase())];

  return (
    <>
      <div className="flex flex-wrap items-center gap-2.5 border-b border-line-2 px-6 pb-[30px] md:px-11">
        <span className="mr-2 font-mono text-[10.5px] tracking-[0.1em] text-muted">
          FILTER
        </span>
        {filters.map((filter) => {
          const on = filter === active;
          return (
            <button
              key={filter}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(filter)}
              className={`cursor-pointer px-[11px] py-1.5 font-mono text-[10.5px] transition-colors ${
                on
                  ? "bg-ink text-bg"
                  : "border border-line-3 text-ink-2 hover:border-accent hover:text-accent"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="px-6 md:px-11">
        {posts.map((post) => {
          const shown =
            active === "ALL" || post.category.toUpperCase() === active;

          return (
            <div
              key={post.slug}
              className="collapse-row"
              style={{
                height: shown ? "auto" : 0,
                opacity: shown ? 1 : 0,
              }}
              aria-hidden={!shown}
            >
              <Link
                href={`/writing/${post.slug}`}
                tabIndex={shown ? undefined : -1}
                className="group grid gap-2 border-b border-line py-[30px] md:grid-cols-[120px_1fr_190px] md:items-baseline md:gap-8"
              >
                <div className="font-mono text-[11px] text-muted">
                  {post.stamp}
                </div>

                <div>
                  <h2 className="mb-2.5 font-display text-[26px] font-normal leading-[1.16] tracking-[-0.01em] transition-colors group-hover:text-accent md:text-[33px]">
                    {post.title}
                  </h2>
                  {post.excerpt ? (
                    <p className="max-w-[60ch] text-[15.5px] leading-[1.6] text-ink-2">
                      {post.excerpt}
                    </p>
                  ) : null}
                </div>

                <div className="font-mono text-[10.5px] text-gold md:text-right">
                  {post.category.toUpperCase()} &nbsp;·&nbsp; {post.readMinutes}{" "}
                  MIN
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
