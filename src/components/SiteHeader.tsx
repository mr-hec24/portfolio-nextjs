"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  // After 80px of scroll the nav loses 6px of vertical padding and gains a
  // hairline border. 180ms, no shadow.
  const [compact, setCompact] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 bg-bg transition-all duration-[180ms] motion-reduce:transition-none ${
        compact ? "border-b border-line-2" : "border-b border-line"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-[1280px] flex-col gap-2 px-6 transition-all duration-[180ms] motion-reduce:transition-none md:flex-row md:items-center md:justify-between md:gap-6 md:px-11 ${
          compact ? "py-3" : "py-[18px]"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-baseline gap-2.5">
            <span className="whitespace-nowrap font-display text-[17px] font-medium text-ink md:text-[19px]">
              Hector A. Rodriguez
            </span>
            <span className="hidden font-mono text-[10px] tracking-[0.08em] text-accent lg:inline">
              AI · EDUCATION
            </span>
          </Link>
          {/* Toggle rides with the wordmark on mobile so the links get a full row. */}
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 md:justify-end md:gap-[26px]">
          <div className="flex gap-5 text-[13px] md:gap-[26px]">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive(item.href)
                    ? "font-semibold text-accent"
                    : "text-ink-2 transition-colors hover:text-accent"
                }
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
