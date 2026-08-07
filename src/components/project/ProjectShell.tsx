import React from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { Badge, Button, Eyebrow, Meta, Placeholder, Tags } from "@/components/ui";

type BadgeKind = "labs" | "research" | "client" | "wip";

export type ProjectNeighbour = { href: string; title: string };

/**
 * The project page template from the design (3c): breadcrumb, badge row,
 * oversized serif title, italic dek, tags + actions, full-bleed hero, then
 * numbered content sections and prev/next navigation.
 */
export default function ProjectShell({
  breadcrumb,
  badge,
  category,
  title,
  dek,
  tags,
  actions,
  hero,
  heroAlt,
  heroLabel,
  children,
  previous,
  next,
}: {
  breadcrumb: string;
  badge: { kind: BadgeKind; text: string };
  category: string;
  title: string;
  dek: string;
  tags: string[];
  actions?: { href: string; label: string; variant?: "solid" | "outline" }[];
  hero?: string;
  heroAlt?: string;
  /** Shown in the hatched stand-in when no real screenshot exists yet. */
  heroLabel?: string;
  children: React.ReactNode;
  previous?: ProjectNeighbour;
  next?: ProjectNeighbour;
}) {
  return (
    <>
      <div className="mx-auto max-w-[1280px] px-6 pt-8 md:px-11">
        <Link
          href="/portfolio"
          className="mb-10 inline-block font-mono text-[10.5px] tracking-[0.1em] text-muted transition-colors hover:text-accent"
        >
          ← PORTFOLIO / {breadcrumb}
        </Link>

        <div className="grid gap-10 pb-11 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-[60px]">
          <div>
            <div className="mb-5 flex flex-wrap items-center gap-2.5">
              <Badge kind={badge.kind}>{badge.text}</Badge>
              <Meta>{category}</Meta>
            </div>
            <h1 className="mb-4 font-display text-[46px] font-normal leading-none tracking-[-0.02em] md:text-[70px]">
              {title}
            </h1>
            <p className="max-w-[30ch] font-display text-[20px] italic leading-[1.4] text-ink-3 md:text-[23px]">
              {dek}
            </p>
          </div>

          <div>
            <div className="mb-6">
              <Tags items={tags} />
            </div>
            {actions?.length ? (
              <div className="flex flex-wrap gap-3">
                {actions.map((action) => (
                  <Button
                    key={action.label}
                    href={action.href}
                    variant={action.variant ?? "solid"}
                    external={action.href.startsWith("http")}
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        {hero ? (
          <Image
            src={hero}
            alt={heroAlt ?? title}
            width={1280}
            height={470}
            priority
            className="h-[280px] w-full border border-line-2 object-cover md:h-[470px]"
          />
        ) : (
          <Placeholder label={heroLabel} className="h-[280px] md:h-[470px]" />
        )}
      </div>

      <div className="mx-auto max-w-[1280px] px-6 pt-16 md:px-11">{children}</div>

      {(previous || next) && (
        <div className="mt-4 grid border-t border-line-2 md:grid-cols-2">
          <div className="border-b border-line-2 px-6 py-[30px] md:border-b-0 md:border-r md:px-11">
            {previous ? (
              <Link href={previous.href} className="group block">
                <div className="mb-2 font-mono text-[10px] tracking-[0.12em] text-muted">
                  ← PREVIOUS
                </div>
                <div className="font-display text-2xl transition-colors group-hover:text-accent">
                  {previous.title}
                </div>
              </Link>
            ) : null}
          </div>
          <div className="px-6 py-[30px] md:px-11 md:text-right">
            {next ? (
              <Link href={next.href} className="group block">
                <div className="mb-2 font-mono text-[10px] tracking-[0.12em] text-muted">
                  NEXT →
                </div>
                <div className="font-display text-2xl transition-colors group-hover:text-accent">
                  {next.title}
                </div>
              </Link>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}

/** A numbered content section: sticky mono eyebrow beside the prose column. */
export function ProjectSection({
  label,
  children,
  last = false,
}: {
  label: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <Reveal
      className={`grid gap-11 py-14 first:pt-0 md:grid-cols-[210px_1fr] ${
        last ? "" : "border-b border-line"
      }`}
    >
      <Eyebrow>{label}</Eyebrow>
      <div>{children}</div>
    </Reveal>
  );
}

/** Lead sentence inside a project section — serif, larger than body. */
export function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-[22px] max-w-[34ch] font-display text-[24px] leading-[1.4] tracking-[-0.005em] md:text-[26px]">
      {children}
    </p>
  );
}

/** Standard project body copy. */
export function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 max-w-[66ch] text-[16.5px] leading-[1.75] text-ink-2 text-pretty">
      {children}
    </p>
  );
}

/** Quieter aside copy — caveats, disclaimers, "the honest part". */
export function Aside({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 max-w-[66ch] text-[15px] leading-[1.7] text-muted text-pretty">
      {children}
    </p>
  );
}

/** Bulleted list matching the body rhythm. */
export function Points({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mb-4 grid max-w-[66ch] gap-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-[16.5px] leading-[1.7] text-ink-2">
          <span className="pt-[7px] font-mono text-[11px] text-accent">—</span>
          <span className="text-pretty">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** The bordered callout used for the utility formula and similar. */
export function Callout({
  children,
  note,
}: {
  children: React.ReactNode;
  note?: string;
}) {
  return (
    <div className="mb-5 max-w-[66ch] border-l-2 border-accent bg-band px-6 py-5">
      <div className="font-mono text-[13px] leading-[1.7] text-ink">
        {children}
      </div>
      {note ? (
        <div className="mt-2.5 font-mono text-[10.5px] text-muted">{note}</div>
      ) : null}
    </div>
  );
}
