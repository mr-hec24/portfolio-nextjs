// src/app/about/page.tsx

import React from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { Button, Eyebrow } from "@/components/ui";

const VALUES = [
  "AI in education should enhance learning by promoting critical thinking — by challenging existing ideas, not by handing over answers.",
  "Technology built for the humans, rather than humans growing for the technology.",
  "A prediction is a compass, not a verdict. It can point an educator toward a student who needs them. It never replaces the relationship, and it is never surveillance.",
  "Say which parts are validated and which are novel. What I can't ground in the literature gets flagged and instrumented, not dressed up as a result.",
];

const EXPERTISE = [
  {
    name: "AI & machine learning",
    detail:
      "Student modeling and intelligent systems for personalized learning.",
    stack: "BKT · HMM · SKLEARN",
  },
  {
    name: "Web development",
    detail: "Frontend and backend applications that hold up in real use.",
    stack: "TS · REACT · NEXT · SUPABASE",
  },
  {
    name: "Mobile development",
    detail: "Cross-platform apps with offline-aware behaviour.",
    stack: "REACT NATIVE · PWA",
  },
  {
    name: "Data analytics",
    detail: "Turning educational data into something an educator can act on.",
    stack: "SQL · PANDAS · POSTGRES",
  },
  {
    name: "Learning science",
    detail: "Grounding what I build in theory that survives scrutiny.",
    stack: "SPACING · RETRIEVAL · SRL",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ---------------- Intro ---------------- */}
      <section className="mx-auto grid max-w-[1280px] items-start gap-10 px-6 pb-14 pt-16 md:px-11 lg:grid-cols-[1fr_400px] lg:gap-16">
        <div>
          <Eyebrow className="mb-6">01 / ABOUT</Eyebrow>
          <h1 className="mb-7 font-display text-[42px] font-normal leading-[1.02] tracking-[-0.02em] md:text-[62px]">
            I learned it the long way.
          </h1>
          <p className="mb-[18px] max-w-[52ch] text-[17px] leading-[1.72] text-ink-2 text-pretty">
            I&apos;m an AI-in-education developer. I build human-first web, app,
            data, and AI solutions grounded in current research, so that schools
            and educators can spend more of their time on the relationships that
            actually move learning.
          </p>
          <p className="max-w-[52ch] text-[17px] leading-[1.72] text-ink-2 text-pretty">
            I&apos;ve never run a classroom of my own. What I have done is sit at
            the other end of the table — as a tutor, as a peer mentor, and as a
            fairly relentless self-teacher. That&apos;s the reason I ask what a
            tool does to a learner before I ask whether the model is accurate.
          </p>
        </div>

        <div className="pb-4 lg:pl-4">
          <div className="relative">
            <div className="absolute left-0 top-[18px] hidden h-full w-full bg-accent lg:-left-4 lg:block" />
            <Image
              src="/images/about/hector-1.JPG"
              alt="Hector A. Rodriguez"
              width={400}
              height={440}
              className="relative block h-[440px] w-full object-cover object-[50%_18%]"
            />
          </div>
          <p className="mt-7 font-mono text-[10.5px] tracking-[0.06em] text-muted">
            fig. 01 — tutor first, builder second
          </p>
        </div>
      </section>

      {/* ---------------- Journey ---------------- */}
      <section className="bg-band px-6 py-16 md:px-11">
        <div className="mx-auto grid max-w-[1280px] gap-11 md:grid-cols-[210px_1fr]">
          <Eyebrow>02 / JOURNEY &amp; VISION</Eyebrow>
          <div>
            <p className="mb-7 max-w-[64ch] text-[16.5px] leading-[1.75] text-ink-2 text-pretty">
              My route into technology didn&apos;t run through a classroom of my
              own — it ran through one-on-one tables. I&apos;ve worked as a tutor,
              sitting with students through the problem they couldn&apos;t crack,
              and as a peer mentor for people a step behind me on the same path.
              Most of what I do professionally, I taught myself, which means
              I&apos;ve been the confused person in the chair often enough to
              remember exactly what it feels like.
            </p>

            <blockquote className="mb-7 max-w-[44ch] border-l-2 border-accent py-1.5 pl-7">
              <p className="font-display text-[26px] leading-[1.28] tracking-[-0.01em] text-ink md:text-[31px]">
                Technology should be a powerful assistant in the learning
                environment, not a replacement.
              </p>
            </blockquote>

            <p className="mb-7 max-w-[64ch] text-[16.5px] leading-[1.75] text-ink-2 text-pretty">
              That vantage point is narrower than a teacher&apos;s, and I think
              it&apos;s a useful one. Tutoring shows you what aggregate data
              hides: a wrong answer is almost never one thing. It&apos;s a
              missing prerequisite, or a misread question, or plain fatigue, or a
              student who has quietly decided they&apos;re &ldquo;not a math
              person.&rdquo; In a spreadsheet, those look identical. Building
              tools that can tell them apart — and that hand the judgment back to
              a human — is the work I care about.
            </p>

            <p className="max-w-[64ch] text-[16.5px] leading-[1.75] text-ink-2 text-pretty">
              So my interest is in using data and AI to take administrative
              weight off educators and hand back insight — and in closing the
              distance between academic research and what actually happens in a
              room with thirty students in it.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- What I believe ---------------- */}
      <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-11">
        <div className="mb-[34px] flex items-center gap-[18px]">
          <Eyebrow className="flex-none">03 / WHAT I BELIEVE</Eyebrow>
          <span className="h-px flex-1 bg-line-2" />
        </div>
        <div className="grid gap-x-11 gap-y-[34px] md:grid-cols-2">
          {VALUES.map((value, i) => (
            <Reveal key={value} index={i}>
              <div className="mb-3 font-mono text-[11px] text-gold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="max-w-[34ch] font-display text-[21px] leading-[1.4] md:text-[23px]">
                {value}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- Expertise ---------------- */}
      <section className="mx-auto max-w-[1280px] px-6 pb-16 md:px-11">
        <div className="mb-6 flex items-center gap-[18px]">
          <Eyebrow className="flex-none">04 / EXPERTISE</Eyebrow>
          <span className="h-px flex-1 bg-line-2" />
        </div>
        <div>
          {EXPERTISE.map((row) => (
            <div
              key={row.name}
              className="grid items-center gap-2 border-b border-line py-[18px] md:grid-cols-[300px_1fr_auto] md:gap-6"
            >
              <div className="font-display text-[22px]">{row.name}</div>
              <div className="text-[14.5px] text-ink-2">{row.detail}</div>
              <div className="font-mono text-[10px] text-muted">{row.stack}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="flex flex-col justify-between gap-10 bg-accent-deep px-6 py-11 text-[#F7F1E4] md:flex-row md:items-center md:px-11">
        <p className="max-w-[34ch] font-display text-[26px] leading-[1.25] md:text-[30px]">
          Curious how any of this works in practice?
        </p>
        <div className="flex flex-none flex-wrap gap-3">
          <Button href="/portfolio" variant="invert">
            See my work
          </Button>
          <Button href="/contact" variant="onAccent">
            Get in touch
          </Button>
        </div>
      </section>
    </>
  );
}
