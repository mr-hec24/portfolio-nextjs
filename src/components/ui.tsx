import React from "react";
import Link from "next/link";

/** Mono, letter-spaced section eyebrow: "01 / SELECTED WORK". */
export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`font-mono text-[10.5px] tracking-[0.14em] text-accent ${className}`}
    >
      {children}
    </div>
  );
}

/** Eyebrow + hairline rule, with optional trailing link. */
export function SectionRule({
  label,
  action,
  className = "",
}: {
  label: string;
  action?: { href: string; label: string };
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-[18px] ${className}`}>
      <Eyebrow className="flex-none">{label}</Eyebrow>
      <span className="h-px flex-1 bg-line-2" />
      {action ? (
        <Link
          href={action.href}
          className="flex-none border-b border-line-3 pb-0.5 text-[13px] font-medium text-ink transition-colors hover:text-accent"
        >
          {action.label}
        </Link>
      ) : null}
    </div>
  );
}

type BadgeKind = "labs" | "research" | "client" | "wip";

const BADGE_STYLE: Record<BadgeKind, string> = {
  labs: "text-olive border border-olive",
  research: "text-gold border border-gold-line",
  client: "text-ink-3 border border-line-3",
  wip: "text-ink-3 border border-dashed border-line-3",
};

/** Bordered category badge — HEC LABS / RESEARCH / CLIENT / WORK IN PROGRESS. */
export function Badge({
  kind,
  children,
}: {
  kind: BadgeKind;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`inline-block px-2 py-1 font-mono text-[9.5px] tracking-[0.14em] ${BADGE_STYLE[kind]}`}
    >
      {children}
    </span>
  );
}

/** Neutral meta text that sits beside a badge. */
export function Meta({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[10px] tracking-[0.1em] text-muted">
      {children}
    </span>
  );
}

/** Mono technology chips. */
export function Tags({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-[7px]">
      {items.map((tag) => (
        <span
          key={tag}
          className="bg-chip px-2 py-[5px] font-mono text-[10px] text-ink-3"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

/** Filled primary action. Sharp 2px corners, never a pill. */
export function Button({
  href,
  children,
  variant = "solid",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "invert" | "onAccent";
  external?: boolean;
}) {
  const base =
    "inline-flex items-center rounded-[2px] px-[22px] py-3 text-[13.5px] font-medium transition-colors";
  const styles = {
    solid: "bg-accent text-on-accent hover:bg-accent-hover",
    outline: "border border-line-3 text-ink hover:border-accent hover:text-accent",
    invert: "bg-[#F7F1E4] text-[#1F1B17] font-semibold hover:bg-white",
    // For use on the rust CTA band, where the surrounding text is cream.
    onAccent:
      "border border-[rgba(247,241,228,.5)] text-[#F7F1E4] hover:border-[#F7F1E4]",
  }[variant];

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${styles}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}

/**
 * "Learn more →" with the hairline that extends to full width when the
 * enclosing .proj element is hovered.
 */
export function LearnMore({ label = "Learn more" }: { label?: string }) {
  return (
    <span className="block">
      <span className="border-b border-accent pb-0.5 text-sm font-medium text-accent">
        {label} &rarr;
      </span>
      <span className="learn-rule" aria-hidden="true" />
    </span>
  );
}

/** Hatched stand-in for a screenshot that hasn't been captured yet. */
export function Placeholder({
  label,
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`hatch flex items-end border border-line-2 p-4 ${className}`}
    >
      {label ? (
        <span className="bg-bg px-2 py-[5px] font-mono text-[10.5px] tracking-[0.05em] text-ink-3">
          {label}
        </span>
      ) : null}
    </div>
  );
}

/** The italic serif pull-quote that closes every page. */
export function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-[30ch] font-display text-xl italic leading-[1.4] text-ink-2">
      {children}
    </p>
  );
}
