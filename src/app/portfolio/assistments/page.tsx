// src/app/portfolio/assistments/page.tsx

import React from "react";
import Image from "next/image";
import ProjectShell, {
  Aside,
  Body,
  Lead,
  Points,
  ProjectSection,
} from "@/components/project/ProjectShell";

const BKT_PARAMS = [
  {
    name: "Initial Knowledge — P(L0)",
    detail: "The probability a student already knows a skill before starting.",
  },
  {
    name: "Learn — P(T)",
    detail:
      "The probability of transitioning from an unlearned to a learned state after an attempt.",
  },
  {
    name: "Forget — P(F)",
    detail:
      "The probability of slipping from a learned state back to an unlearned one.",
  },
  {
    name: "Guess — P(G)",
    detail:
      "The probability an unlearned student answers correctly by guessing.",
  },
  {
    name: "Slip — P(S)",
    detail:
      "The probability a learned student answers incorrectly through a momentary lapse.",
  },
];

export default function AssistmentsProjectPage() {
  return (
    <ProjectShell
      breadcrumb="ASSISTMENTS"
      badge={{ kind: "research", text: "RESEARCH" }}
      category="GRADUATE PROJECT · AI & DATA ANALYTICS"
      title="ASSISTments"
      dek="A mastery learning service — a compass for teachers, never surveillance."
      tags={["Python", "scikit-learn", "pandas", "numpy", "PostgreSQL", "REST API"]}
      actions={[
        {
          href: "/images/portfolio/assistments-research-poster.pdf",
          label: "Research poster ↗",
        },
        {
          href: "https://www.cs.williams.edu/~iris/res/bkt-balloon/index.html",
          label: "Interactive BKT demo ↗",
          variant: "outline",
        },
      ]}
      hero="/images/portfolio/assistments-hero.png"
      heroAlt="ASSISTments mastery learning service"
      previous={{ href: "/portfolio/interleave", title: "Interleave" }}
      next={{ href: "/portfolio/waypoint", title: "Waypoint" }}
    >
      <ProjectSection label="01 / THE PROBLEM">
        <Lead>
          Formative assessment tells you what happened. It doesn&apos;t tell you
          what a student knows.
        </Lead>
        <Body>
          ASSISTments is a widely used, free online education tool for K–12 math.
          It gives students immediate feedback as they work through problems and
          gives teachers real-time learning data, and it supports high-impact
          tutoring programs by pairing traditional materials with digital tools.
        </Body>
        <Body>
          The challenge here was to enhance personalized learning with more
          granular, data-driven insight for teachers, schools, and researchers.
          By tracking and predicting student knowledge in real time, the project
          aimed to move past basic assessment into proactive, tailored support —
          bridging the gap between a student&apos;s current understanding and
          their potential for mastery, and freeing teacher time for
          relationship-building and differentiated instruction.
        </Body>
      </ProjectSection>

      <ProjectSection label="02 / MY ROLE">
        <Body>
          I owned the development, training, and comparative analysis of the
          machine learning models used to predict student skill mastery.
        </Body>
        <Points
          items={[
            <>
              <strong className="text-ink">Model development &amp; comparison</strong>{" "}
              — implemented and rigorously compared a Logistic Regression model
              (Performance Factor Analysis) against a Hidden Markov Model
              (Bayesian Knowledge Tracing), setting up the experimental framework
              and evaluating both for our use case.
            </>,
            <>
              <strong className="text-ink">Data analytics &amp; preprocessing</strong>{" "}
              — extensive cleaning and analysis of the ASSISTments dataset in SQL
              on PostgreSQL, to make the input features reliable.
            </>,
            <>
              <strong className="text-ink">API backend</strong> — contributed to a
              RESTful Python service to serve the trained models and support
              real-time mastery predictions inside ASSISTments.
            </>,
          ]}
        />
      </ProjectSection>

      <ProjectSection label="03 / THE APPROACH">
        <Body>
          The primary solution centred on{" "}
          <strong className="text-ink">Bayesian Knowledge Tracing</strong>, a
          probabilistic model rooted in cognitive science that mimics real
          learning. BKT operates on two hidden states for any student–skill
          pairing: the student has either <em>not yet learned</em> the skill, or{" "}
          <em>has learned</em> it.
        </Body>
        <Body>
          Five core probabilities, learned from interaction data, track that
          knowledge state over time:
        </Body>

        <dl className="mb-5 max-w-[66ch]">
          {BKT_PARAMS.map((param) => (
            <div
              key={param.name}
              className="grid gap-1 border-b border-line py-3.5 md:grid-cols-[240px_1fr] md:gap-6"
            >
              <dt className="font-mono text-[11px] tracking-[0.06em] text-accent">
                {param.name}
              </dt>
              <dd className="text-[15.5px] leading-[1.65] text-ink-2">
                {param.detail}
              </dd>
            </div>
          ))}
        </dl>

        <Body>
          By continuously updating those probabilities against a student&apos;s
          sequence of correct and incorrect answers, BKT gives a dynamic,
          real-time prediction of whether a skill has been mastered — a granular
          view of individual progress rather than an aggregate score.
        </Body>
      </ProjectSection>

      <ProjectSection label="04 / INTENDED IMPACT">
        <Points
          items={[
            <>
              <strong className="text-ink">For students</strong> — real-time
              insight into mastery per skill, enabling adaptive pathways and
              targeted practice on concepts not yet mastered, plus timely
              intervention where a specific knowledge gap shows up.
            </>,
            <>
              <strong className="text-ink">For teachers</strong> — actionable
              dashboards that surface who is at risk of falling behind and who is
              ready to move on, cutting manual assessment analysis substantially
              and leaving more room for differentiated instruction.
            </>,
            <>
              <strong className="text-ink">For the platform</strong> — more
              sophisticated student modeling in support of the mission to
              accelerate math achievement, and research insight from the BKT vs.
              PFA comparison on a large-scale dataset.
            </>,
          ]}
        />
        <Aside>
          A core part of the approach was an explicit disclaimer: these predicted
          values are not meant to replace the student–teacher relationship, and
          they are not a basis for surveillance. They are a compass pointing
          educators toward students who may need extra support — nothing more.
        </Aside>
      </ProjectSection>

      <ProjectSection label="05 / GALLERY" last>
        <div className="grid max-w-[66ch] gap-5 md:grid-cols-2">
          <figure>
            <Image
              src="/images/portfolio/assistments-model-comparison.png"
              alt="Comparing BKT and PFA models"
              width={600}
              height={230}
              className="h-[230px] w-full border border-line-2 object-cover"
            />
            <figcaption className="mt-3 font-mono text-[10px] tracking-[0.05em] text-muted">
              bkt vs. performance factor analysis
            </figcaption>
          </figure>
          <figure>
            <Image
              src="/images/portfolio/assistments-question-progress.png"
              alt="Skill mastery progress across ten questions"
              width={600}
              height={230}
              className="h-[230px] w-full border border-line-2 object-cover"
            />
            <figcaption className="mt-3 font-mono text-[10px] tracking-[0.05em] text-muted">
              mastery predictions over 10 questions
            </figcaption>
          </figure>
        </div>
      </ProjectSection>
    </ProjectShell>
  );
}
