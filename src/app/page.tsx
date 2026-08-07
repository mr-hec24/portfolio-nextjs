// src/app/page.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import {
  Badge,
  Button,
  Eyebrow,
  LearnMore,
  Meta,
  Placeholder,
  SectionRule,
  Tags,
} from "@/components/ui";

const DESK = [
  "Building out the Interleave user experience to promote retrieval.",
  "Thinking through the parameters of Interleave's new algorithm, making sure none of them rest on assumptions that are false.",
];

const WORKSHOP = [
  {
    href: "/portfolio/waypoint",
    badge: { kind: "labs" as const, text: "HEC LABS" },
    title: "Waypoint",
    blurb:
      "Turns your own spoken mistakes into spaced-repetition cards inside a structured immersion session.",
    image: null,
  },
  {
    href: "/portfolio/fil-learning",
    badge: { kind: "client" as const, text: "CLIENT" },
    title: "Fall In Love Learning",
    blurb:
      "A landing page and free college-application resource hub for a new tutoring company.",
    image: "/images/portfolio/fil-learning-hero.png" as string | null,
  },
  {
    href: "/portfolio/phoenix-soteria",
    badge: { kind: "wip" as const, text: "WORK IN PROGRESS" },
    title: "Phoenix Soteria",
    blurb:
      "An AI-assisted fitness and wellness tracker, with privacy as a first-order constraint.",
    image: "/images/portfolio/phoenix-soteria-hero.png",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="grid lg:grid-cols-[1fr_430px]">
        <div className="px-6 pb-14 pt-16 md:px-11 md:pt-[76px]">
          <h1 className="mb-[26px] max-w-[15ch] font-display text-[44px] font-normal leading-[1.06] tracking-[-0.015em] text-pretty md:text-[64px]">
            A human-first AI developer working in education.
          </h1>

          <p className="mb-[34px] max-w-[48ch] text-[17px] leading-[1.7] text-ink-2 text-pretty">
            I build EdTech that starts from what learners and educators actually
            need. I came to it through tutoring tables and peer mentoring rather
            than a classroom of my own — and I treat the ethical and
            philosophical questions about technology and intelligence as part of
            the engineering, not a footnote to it.
          </p>

          <div className="mb-12 flex flex-wrap gap-3">
            <Button href="/portfolio">See my work</Button>
            <Link
              href="/about"
              className="border-b border-accent px-1.5 py-3 text-sm font-medium text-accent"
            >
              About me &rarr;
            </Link>
          </div>

          <div className="border-t border-line-2 pt-[22px]">
            <div className="mb-3.5 font-mono text-[10.5px] tracking-[0.14em] text-gold">
              ON MY DESK RIGHT NOW
            </div>
            <div className="grid gap-[9px] text-[14.5px] leading-[1.5] text-ink-2">
              {DESK.map((item, i) => (
                <div key={item} className="flex gap-3">
                  <span className="pt-[3px] font-mono text-[11px] text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="-mx-6 mt-[46px] flex items-center gap-[18px] border-t border-line-2 px-6 pt-5 md:-mx-11 md:px-11">
            <Eyebrow className="flex-none">01 / SELECTED WORK</Eyebrow>
            <span className="h-px flex-1 bg-line-2" />
            <span className="hidden text-[13px] text-muted lg:inline">
              Interleave · ASSISTments BKT · Waypoint
            </span>
          </div>
        </div>

        <div className="relative order-first min-h-[320px] bg-accent-deep lg:order-none">
          <Image
            src="/images/about/hector-1.JPG"
            alt="Hector A. Rodriguez"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 430px"
            className="object-cover object-[50%_20%]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(23,18,15,.78)] to-transparent px-5 py-4 font-mono text-[10.5px] tracking-[0.06em] text-[#F1E7D8]">
            Bozeman, Montana
          </div>
        </div>
      </section>

      {/* ---------------- Featured: Interleave ---------------- */}
      <div className="px-6 pt-[70px] md:px-11">
        <Reveal className="grid items-center gap-11 border-b border-line pb-14 lg:grid-cols-[1.02fr_.98fr]">
          <Link href="/portfolio/interleave" className="proj block">
            <div className="proj-media overflow-hidden">
              <Placeholder
                label="interleave — app screenshot, 16:10"
                className="h-[352px]"
              />
            </div>
          </Link>
          <div>
            <div className="mb-[18px] flex flex-wrap items-center gap-2.5">
              <Badge kind="labs">HEC LABS</Badge>
              <Meta>v1 · IN DEVELOPMENT</Meta>
            </div>
            <h2 className="mb-3.5 font-display text-[32px] font-normal leading-[1.1] tracking-[-0.01em] md:text-[42px]">
              Interleave
            </h2>
            <p className="mb-[22px] max-w-[44ch] text-[16.5px] leading-[1.65] text-ink-2 text-pretty">
              A cross-domain practice scheduler that decides which skill you
              should practice next, and for how long — scoring every skill
              against memory decay, difficulty urgency, fatigue, and
              prerequisite readiness.
            </p>
            <div className="mb-[26px]">
              <Tags
                items={["TypeScript", "Supabase", "FSRS scheduling", "Embeddings"]}
              />
            </div>
            <Link href="/portfolio/interleave" className="proj block max-w-fit">
              <LearnMore />
            </Link>
          </div>
        </Reveal>

        {/* ---------------- Featured: ASSISTments ---------------- */}
        <Reveal className="grid items-center gap-11 py-14 lg:grid-cols-[.98fr_1.02fr]">
          <div className="lg:order-none">
            <div className="mb-[18px] flex flex-wrap items-center gap-2.5">
              <Badge kind="research">RESEARCH</Badge>
              <Meta>GRADUATE PROJECT</Meta>
            </div>
            <h2 className="mb-3.5 font-display text-[30px] font-normal leading-[1.12] tracking-[-0.01em] md:text-[38px]">
              ASSISTments — mastery learning service
            </h2>
            <p className="mb-[22px] max-w-[44ch] text-[16.5px] leading-[1.65] text-ink-2 text-pretty">
              A Bayesian Knowledge Tracing model that predicts student math-skill
              mastery in real time — built as a compass for teachers, explicitly
              not as surveillance.
            </p>
            <div className="mb-[26px]">
              <Tags items={["Python", "scikit-learn", "PostgreSQL", "REST API"]} />
            </div>
            <Link href="/portfolio/assistments" className="proj block max-w-fit">
              <LearnMore />
            </Link>
          </div>
          <Link href="/portfolio/assistments" className="proj order-first block lg:order-none">
            <div className="proj-media overflow-hidden border border-line-2">
              <Image
                src="/images/portfolio/assistments-hero.png"
                alt="ASSISTments mastery learning service"
                width={800}
                height={310}
                className="h-[310px] w-full object-cover"
              />
            </div>
          </Link>
        </Reveal>
      </div>

      {/* ---------------- Also in the workshop ---------------- */}
      <section className="bg-band px-6 py-14 md:px-11">
        <SectionRule
          label="02 / ALSO IN THE WORKSHOP"
          action={{ href: "/portfolio", label: "See all projects →" }}
          className="mb-[30px]"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {WORKSHOP.map((item, i) => (
            <Reveal key={item.href} index={i}>
              <Link
                href={item.href}
                className="proj block h-full border border-line-2 bg-bg p-[22px]"
              >
                <div className="proj-media mb-[18px] overflow-hidden">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt=""
                      width={480}
                      height={260}
                      className="h-[104px] w-full border border-line object-cover"
                    />
                  ) : (
                    <Placeholder className="h-[104px]" />
                  )}
                </div>
                <Badge kind={item.badge.kind}>{item.badge.text}</Badge>
                <h3 className="mb-2 mt-3.5 font-display text-[23px] font-medium">
                  {item.title}
                </h3>
                <p className="text-sm leading-[1.6] text-ink-2">{item.blurb}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- Say hello ---------------- */}
      <section className="bg-accent-deep px-6 py-16 text-[#F7F1E4] md:px-11">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end md:gap-[60px]">
          <div>
            <div className="mb-5 font-mono text-[10.5px] tracking-[0.14em] text-[#F0C9A8]">
              03 / SAY HELLO
            </div>
            <p className="max-w-[24ch] font-display text-[30px] leading-[1.16] tracking-[-0.01em] md:text-[40px]">
              If you work in schools, research, or you&apos;re building something
              adjacent — I&apos;d like to hear about it.
            </p>
          </div>
          <div className="flex flex-none flex-col items-start gap-3.5">
            <Button href="/contact" variant="invert">
              Get in touch
            </Button>
            <a
              href="mailto:harmandorod24@gmail.com"
              className="font-mono text-[11.5px] text-[#F0C9A8] hover:underline"
            >
              harmandorod24@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
