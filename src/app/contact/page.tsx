// src/app/contact/page.tsx

import React from "react";
import { Eyebrow } from "@/components/ui";

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-[1280px] gap-14 px-6 pb-[76px] pt-16 md:px-11 lg:grid-cols-[1.05fr_.95fr] lg:gap-[70px]">
      {/* ---------------- Direct contact — the main event ---------------- */}
      <div>
        <Eyebrow className="mb-6">01 / CONTACT</Eyebrow>
        <h1 className="mb-[26px] font-display text-[40px] font-normal leading-[1.04] tracking-[-0.02em] md:text-[56px]">
          Say hello
        </h1>
        <p className="mb-[42px] max-w-[46ch] text-[17px] leading-[1.72] text-ink-2 text-pretty">
          If you&apos;re a school, an EdTech team, a researcher, or someone using
          one of my tools and something&apos;s broken — write to me. I read
          everything and answer within a day or two.
        </p>

        <div className="mb-[26px] border-t border-line-2 pt-6">
          <div className="mb-2.5 font-mono text-[10.5px] tracking-[0.12em] text-muted">
            EMAIL
          </div>
          <a
            href="mailto:harmandorod24@gmail.com"
            className="font-display text-[24px] text-accent transition-colors hover:text-accent-hover md:text-[29px]"
          >
            harmandorod24@gmail.com
          </a>
        </div>

        <div className="border-t border-line-2 pt-6">
          <div className="mb-3.5 font-mono text-[10.5px] tracking-[0.12em] text-muted">
            ELSEWHERE
          </div>
          <div className="flex gap-[26px] text-[15px]">
            <a
              href="https://github.com/mr-hec24"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-line-3 pb-0.5 transition-colors hover:text-accent"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/hector-a-rodriguez24"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-line-3 pb-0.5 transition-colors hover:text-accent"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>

      {/* ---------------- Form — the alternative ----------------
          Posts to the visitor's own mail client so the page stays fully
          static. Swap the action for a form endpoint when one exists. */}
      <div className="bg-band p-[34px] pb-[38px]">
        <div className="mb-[22px] font-mono text-[10.5px] tracking-[0.12em] text-muted">
          OR USE THE FORM
        </div>
        <form
          action="mailto:harmandorod24@gmail.com"
          method="post"
          encType="text/plain"
          className="grid gap-[18px]"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-[7px] block text-[12.5px] text-ink-3"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="h-11 w-full border border-line-3 bg-bg px-3 text-[14px] text-ink outline-none focus:border-accent"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-[7px] block text-[12.5px] text-ink-3"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="h-11 w-full border border-line-3 bg-bg px-3 text-[14px] text-ink outline-none focus:border-accent"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-[7px] block text-[12.5px] text-ink-3"
            >
              What&apos;s on your mind?
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="h-[150px] w-full resize-y border border-line-3 bg-bg p-3 text-[14px] text-ink outline-none focus:border-accent"
            />
          </div>
          <div className="mt-1 flex flex-wrap items-center justify-between gap-4">
            <button
              type="submit"
              className="cursor-pointer rounded-[2px] bg-accent px-[26px] py-[13px] text-sm font-medium text-on-accent transition-colors hover:bg-accent-hover"
            >
              Send
            </button>
            <span className="font-mono text-[10px] text-muted">
              NO NEWSLETTER, NO FOLLOW-UP SEQUENCE
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
