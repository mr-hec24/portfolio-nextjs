// src/app/writing/[slug]/page.tsx

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { formatLongDate, getPost, getPosts } from "@/lib/posts";

/**
 * Every article is a markdown file in the repo, so the full set is known at
 * build time. dynamicParams: false means anything else is a clean 404 rather
 * than an attempted render.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not found" };

  return {
    title: `${post.title} — Hector A. Rodriguez`,
    description: post.excerpt ?? undefined,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const posts = getPosts();
  const index = posts.findIndex((p) => p.slug === post.slug);
  const newer = index > 0 ? posts[index - 1] : null;
  const older = index >= 0 && index < posts.length - 1 ? posts[index + 1] : null;

  return (
    <>
      <article className="mx-auto max-w-[1280px] px-6 pt-8 md:px-11">
        <Link
          href="/writing"
          className="mb-10 inline-block font-mono text-[10.5px] tracking-[0.1em] text-muted transition-colors hover:text-accent"
        >
          ← WRITING / {post.category.toUpperCase()}
        </Link>

        <header className="grid gap-10 pb-12 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-[60px]">
          <div>
            <div className="mb-5 font-mono text-[10.5px] tracking-[0.12em] text-gold">
              {post.category.toUpperCase()} &nbsp;·&nbsp; {post.readMinutes} MIN
            </div>
            <h1 className="font-display text-[38px] font-normal leading-[1.04] tracking-[-0.02em] md:text-[58px]">
              {post.title}
            </h1>
          </div>
          {post.excerpt ? (
            <p className="mb-1.5 max-w-[34ch] font-display text-[20px] italic leading-[1.45] text-ink-3 md:text-[23px]">
              {post.excerpt}
            </p>
          ) : null}
        </header>

        {/* Meta rail beside the prose, matching the project pages' rhythm. */}
        <div className="grid gap-11 border-t border-line pt-12 md:grid-cols-[210px_1fr]">
          <div className="font-mono text-[10.5px] tracking-[0.12em] text-muted md:sticky md:top-28 md:self-start">
            {formatLongDate(post.publishedAt)}
          </div>
          <div className="prose-notes max-w-[68ch]">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.body}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      {(newer || older) && (
        <nav className="mx-auto mt-20 grid max-w-[1280px] border-t border-line-2 md:grid-cols-2">
          <div className="border-b border-line-2 px-6 py-[30px] md:border-b-0 md:border-r md:px-11">
            {newer ? (
              <Link href={`/writing/${newer.slug}`} className="group block">
                <div className="mb-2 font-mono text-[10px] tracking-[0.12em] text-muted">
                  ← NEWER
                </div>
                <div className="font-display text-2xl transition-colors group-hover:text-accent">
                  {newer.title}
                </div>
              </Link>
            ) : null}
          </div>
          <div className="px-6 py-[30px] md:px-11 md:text-right">
            {older ? (
              <Link href={`/writing/${older.slug}`} className="group block">
                <div className="mb-2 font-mono text-[10px] tracking-[0.12em] text-muted">
                  OLDER →
                </div>
                <div className="font-display text-2xl transition-colors group-hover:text-accent">
                  {older.title}
                </div>
              </Link>
            ) : null}
          </div>
        </nav>
      )}
    </>
  );
}
