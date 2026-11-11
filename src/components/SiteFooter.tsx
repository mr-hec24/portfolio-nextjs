import React from "react";
import Link from "next/link";
import { PullQuote } from "./ui";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line-2">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 pb-[34px] pt-10 md:grid-cols-[1.5fr_1fr] md:items-end md:px-11">
        <div>
          <PullQuote>
            &ldquo;Every design decision starts with a learner, not a
            feature.&rdquo;
          </PullQuote>
          <p className="mt-[22px] font-mono text-[10px] tracking-[0.08em] text-muted">
            &copy; {new Date().getFullYear()} HECTOR A. RODRIGUEZ
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 md:items-end">
          <div className="flex gap-5 text-[13px] text-ink-2">
            <a
              href="https://github.com/mr-hec24"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/hector-a-rodriguez24"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
            <Link href="/contact" className="transition-colors hover:text-accent">
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
