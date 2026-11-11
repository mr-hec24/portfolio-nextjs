// src/app/portfolio/page.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import {
  Badge,
  Button,
  Eyebrow,
  LearnMore,
  Placeholder,
  Tags,
} from "@/components/ui";

const SUPPORTING = [
  {
    href: "/portfolio/fil-learning",
    badge: { kind: "client" as const, text: "CLIENT" },
    title: "Fall In Love Learning",
    blurb:
      "A static site for a new tutoring company: rates, services, tutors, and a free college-application resource section.",
    tags: ["HTML", "CSS", "Bootstrap"],
    image: "/images/portfolio/fil-learning-hero.png",
  },
  {
    href: "/portfolio/phoenix-soteria",
    badge: { kind: "wip" as const, text: "WORK IN PROGRESS" },
    title: "Phoenix Soteria",
    blurb:
      "A mobile fitness and wellness tracker with AI-assisted insight, built with health-data privacy as a first-order constraint.",
    tags: ["React Native", "Python", "Supabase"],
    image: "/images/portfolio/phoenix-soteria-hero.png",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* ---------------- Header ---------------- */}
      <section className="mx-auto grid max-w-[1280px] gap-10 border-b border-line px-6 pb-11 pt-16 md:px-11 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-[60px]">
        <div>
          <Eyebrow className="mb-[22px]">01 / PORTFOLIO</Eyebrow>
          <h1 className="font-display text-[40px] font-normal leading-[1.04] tracking-[-0.015em] md:text-[58px]">
            Selected work
          </h1>
        </div>
        <p className="mb-1.5 text-base leading-[1.7] text-ink-2 text-pretty">
          Ordered by weight, not by date. The first two are where most of my
          thinking lives; the rest are honest about what they are.
        </p>
      </section>

      <div className="mx-auto max-w-[1280px] px-6 md:px-11">
        {/* ---------------- 01 Interleave ---------------- */}
        <Reveal className="pt-14">
          <div className="mb-[22px] flex items-baseline gap-3.5">
            <span className="font-mono text-[30px] text-ghost">01</span>
            <Badge kind="labs">HEC LABS</Badge>
          </div>
          <Link href="/portfolio/interleave" className="proj block">
            <div className="proj-media mb-[30px] overflow-hidden">
              <Placeholder
                label="interleave — scheduler view, or an interactive utility-score preview"
                className="h-[430px]"
              />
            </div>
          </Link>
          <div className="grid gap-14 border-b border-line pb-[62px] lg:grid-cols-[1fr_1.15fr]">
            <div>
              <h2 className="mb-3 font-display text-[36px] font-normal leading-[1.06] tracking-[-0.015em] md:text-[46px]">
                Interleave
              </h2>
              <p className="mb-[22px] font-display text-[19px] italic leading-[1.45] text-ink-3">
                The practice conductor — which skill next, and for how long.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button href="/portfolio/interleave">Learn more</Button>
                <Button
                  href="https://github.com/mr-hec24"
                  variant="outline"
                  external
                >
                  Repo
                </Button>
              </div>
            </div>
            <div>
              <p className="mb-4 text-[16.5px] leading-[1.7] text-ink-2 text-pretty">
                People learning several unrelated skills at once have no tool
                that optimizes across domains. Spaced-repetition apps tell you
                when to review a card; none of them decide which skill to work on
                next. Interleave scores every skill each tick against memory
                decay, desirable-difficulty urgency, cognitive fatigue and
                prerequisite readiness, then switches only when a rival skill
                wins by a margin — so session length is emergent rather than a
                fixed timer.
              </p>
              <p className="mb-6 text-[14.5px] leading-[1.65] text-muted">
                v1 ships fully closed-form with zero trained parameters.
                Components without direct empirical support are flagged as novel
                and instrumented, not presented as settled.
              </p>
              <Tags
                items={[
                  "TypeScript",
                  "Node.js",
                  "Supabase",
                  "FSRS scheduling",
                  "Embeddings",
                ]}
              />
            </div>
          </div>
        </Reveal>

        {/* ---------------- 02 ASSISTments ---------------- */}
        <Reveal className="grid items-center gap-11 border-b border-line py-14 lg:grid-cols-[1.08fr_.92fr]">
          <Link href="/portfolio/assistments" className="proj block">
            <div className="proj-media overflow-hidden">
              <Image
                src="/images/portfolio/assistments-hero.png"
                alt="ASSISTments mastery learning service"
                width={800}
                height={330}
                className="h-[330px] w-full border border-line-2 object-cover"
              />
            </div>
          </Link>
          <div>
            <div className="mb-4 flex items-baseline gap-3.5">
              <span className="font-mono text-[26px] text-ghost">02</span>
              <Badge kind="research">RESEARCH</Badge>
            </div>
            <h2 className="mb-3 font-display text-[28px] font-normal leading-[1.1] tracking-[-0.01em] md:text-[36px]">
              A mastery learning service for ASSISTments
            </h2>
            <p className="mb-5 max-w-[48ch] text-base leading-[1.68] text-ink-2 text-pretty">
              Bayesian Knowledge Tracing over real K–12 math interaction data,
              compared against Performance Factor Analysis, served through a
              Python API. The predictions are a compass pointing teachers toward
              students who need them — never a surveillance signal.
            </p>
            <div className="mb-6">
              <Tags
                items={["Python", "scikit-learn", "pandas", "PostgreSQL"]}
              />
            </div>
            <Link href="/portfolio/assistments" className="proj block max-w-fit">
              <LearnMore />
            </Link>
          </div>
        </Reveal>

        {/* ---------------- 03 Waypoint ---------------- */}
        <Reveal className="grid items-center gap-10 border-b border-line py-14 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <div className="mb-4 flex items-baseline gap-3.5">
              <span className="font-mono text-[22px] text-ghost">03</span>
              <Badge kind="labs">HEC LABS</Badge>
            </div>
            <h2 className="mb-3 font-display text-[26px] font-normal leading-[1.14] md:text-[31px]">
              Waypoint
            </h2>
            <p className="mb-[18px] max-w-[46ch] text-[15.5px] leading-[1.65] text-ink-2 text-pretty">
              The Roadtrip Method turned into a tool: Input / Output /
              Maintenance sessions where you record a story, get it transcribed
              and corrected, and watch your own gaps become tomorrow&apos;s
              flashcards.
            </p>
            <div className="mb-5">
              <Tags items={["React 19", "Supabase", "Whisper", "SM-2"]} />
            </div>
            <Link href="/portfolio/waypoint" className="proj block max-w-fit">
              <LearnMore />
            </Link>
          </div>
          <Link href="/portfolio/waypoint" className="proj block">
            <div className="proj-media overflow-hidden">
              <Placeholder
                label="story-speaking review workbench"
                className="h-[262px]"
              />
            </div>
          </Link>
        </Reveal>

        {/* ---------------- 04 Supporting work ---------------- */}
        <section className="py-12">
          <div className="mb-[22px] font-mono text-[10.5px] tracking-[0.14em] text-muted">
            04 / SUPPORTING WORK
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {SUPPORTING.map((item, i) => (
              <Reveal key={item.href} index={i}>
                <Link
                  href={item.href}
                  className="proj block h-full border border-line-2 p-6"
                >
                  <div className="proj-media mb-5 overflow-hidden border border-line">
                    <Image
                      src={item.image}
                      alt=""
                      width={600}
                      height={150}
                      className="h-[150px] w-full object-cover"
                    />
                  </div>
                  <Badge kind={item.badge.kind}>{item.badge.text}</Badge>
                  <h3 className="mb-2.5 mt-3.5 font-display text-[25px] font-medium">
                    {item.title}
                  </h3>
                  <p className="mb-4 text-[14.5px] leading-[1.6] text-ink-2">
                    {item.blurb}
                  </p>
                  <div className="mb-4">
                    <Tags items={item.tags} />
                  </div>
                  <LearnMore />
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
