// src/app/portfolio/interleave/page.tsx

import React from "react";
import ProjectShell, {
  Aside,
  Body,
  Callout,
  Lead,
  Points,
  ProjectSection,
} from "@/components/project/ProjectShell";
import { Placeholder } from "@/components/ui";

export default function InterleaveProjectPage() {
  return (
    <ProjectShell
      breadcrumb="INTERLEAVE"
      badge={{ kind: "labs", text: "HEC LABS" }}
      category="AI & LEARNING SCIENCE"
      title="Interleave"
      dek="A cross-domain practice scheduler — which skill next, and for how long."
      tags={[
        "TypeScript",
        "Node.js",
        "Supabase",
        "FSRS scheduling",
        "Embeddings",
        "Python (planned)",
      ]}
      actions={[
        {
          href: "https://github.com/mr-hec24/interleave",
          label: "GitHub repo ↗",
          variant: "outline",
        },
      ]}
      heroLabel="hero — full scheduler screen, or an embedded interactive demo"
      previous={{ href: "/portfolio/waypoint", title: "Waypoint" }}
      next={{
        href: "/portfolio/assistments",
        title: "ASSISTments — mastery learning service",
      }}
    >
      <ProjectSection label="01 / THE PROBLEM">
        <Lead>No tool decides which skill you should practice next.</Lead>
        <Body>
          People learning several unrelated skills at once — music, a language,
          programming — get plenty of help with <em>when</em> to review a card.
          Anki and FSRS solve that. Nothing decides <em>which</em> skill to open
          first, or when to stop.
        </Body>
        <Body>
          The self-regulated-learning literature is blunt about why that matters:
          learners systematically mis-schedule themselves. We prefer blocked
          practice, and we trust the feeling of fluency over the evidence of
          retrieval. The scheduling decision itself is the unmet need.
        </Body>
      </ProjectSection>

      <ProjectSection label="02 / MY ROLE">
        <Body>
          Solo founder. I own the design end to end:
        </Body>
        <Points
          items={[
            <>
              <strong className="text-ink">Model design</strong> — the
              utility-maximization loop, the saturating desirable-difficulty
              urgency curve, the four-channel cognitive-fatigue model, and the
              hysteresis-based switching policy that makes session length
              emergent.
            </>,
            <>
              <strong className="text-ink">Architecture &amp; roadmap</strong> —
              a closed-form v1 with zero trained parameters, plus a data-gated
              path to a learned decay model (v2) and a cross-skill transfer GNN
              (v3).
            </>,
            <>
              <strong className="text-ink">Research grounding</strong> — a
              structured reading of the memory, interleaving,
              self-regulated-learning, and knowledge-tracing literature, used to
              separate validated mechanisms from novel ones.
            </>,
          ]}
        />
      </ProjectSection>

      <ProjectSection label="03 / THE APPROACH">
        <Body>
          Every tick, each skill gets a utility score combining four forces:{" "}
          <strong className="text-ink">urgency</strong> (is this skill in the
          effortful-but-recoverable &ldquo;desirable difficulty&rdquo; band?),{" "}
          <strong className="text-ink">fatigue</strong> (how loaded are the
          cognitive channels it draws on?),{" "}
          <strong className="text-ink">readiness</strong> (are its prerequisites
          mastered?), and <strong className="text-ink">interference</strong> (was
          something semantically adjacent just practiced?). A hard reachability
          mask excludes any skill with an unmet prerequisite.
        </Body>

        <Callout note="switch only when a rival beats the current skill by δ — session length is emergent">
          U<span className="text-[10px]">i</span> = 1[reachable] · (α·Urgency −
          β·Fatigue + γ·Readiness − λ·Interference)
        </Callout>

        <Body>
          Two decisions are deliberate. Urgency <em>saturates</em> rather than
          following a symmetric bell curve — an overdue skill stays at maximum
          urgency instead of being deprioritized forever, avoiding a death spiral
          for exactly the skills that most need rescue. And switching uses
          hysteresis, so the schedule doesn&apos;t thrash at every crossover and
          session length becomes emergent, controlled by one interpretable knob
          rather than a fixed timer.
        </Body>
        <Body>
          v1 ships fully closed-form: zero trained parameters, perfect cold start
          by construction. Its one real obligation is the append-only logging
          spine, which becomes the training set for a learned decay model at
          around 5–10k reviews, and eventually a two-relation graph network that
          models cross-skill transfer — but only once it beats calibrated
          Half-Life Regression on a time-split evaluation. The log is the asset:
          training data, product analytics, and research corpus are the same
          table.
        </Body>
      </ProjectSection>

      <ProjectSection label="04 / SCIENTIFIC HONESTY">
        <Body>
          Interleave is careful about what it claims. The classic interleaving
          effect — the one that makes shuffled practice beat blocked practice —
          depends on similar, confusable categories and does not transfer to
          unrelated domains (Brunmair &amp; Richter, 2019). So Interleave never
          claims that effect for cross-domain switching.
        </Body>
        <Body>
          The cross-domain benefit is claimed instead via three distinct
          mechanisms: forced spacing, contextual-interference-style variability,
          and channel-level fatigue relief.
        </Body>
        <Aside>
          Components with no direct empirical validation — the four-channel
          fatigue model, the extrapolation of item-level decay to whole skills,
          and the size of any cross-domain transfer effect — are explicitly
          flagged as novel and instrumented for testing, not presented as settled
          science. Cross-domain transfer coefficients initialize at zero and must
          be discovered from real learner data before any transfer is asserted.
        </Aside>
      </ProjectSection>

      <ProjectSection label="05 / INTENDED IMPACT">
        <Body>
          Interleave is in early development (v1), so these are framed as{" "}
          <strong className="text-ink">intended</strong> outcomes rather than
          achieved results.
        </Body>
        <Points
          items={[
            <>
              <strong className="text-ink">Multi-skill learners</strong> — a
              single answer to &ldquo;what should I practice next?&rdquo; across
              unrelated domains, replacing ad-hoc self-scheduling that the
              research shows is systematically biased, with session structure
              tuned by one interpretable parameter rather than rigid blocks.
            </>,
            <>
              <strong className="text-ink">Learning-science practice</strong> — an
              honest cross-domain design, plus a logging spine built from day one
              so novel components can be empirically tested rather than assumed.
            </>,
            <>
              <strong className="text-ink">The platform</strong> — a version
              sequence gated by data, not preference. Open-core intent: the
              algorithms and research are meant to be open, with a hosted service
              funding the infrastructure.
            </>,
          ]}
        />
      </ProjectSection>

      <ProjectSection label="06 / GALLERY" last>
        <div className="grid max-w-[66ch] gap-5">
          <Placeholder
            label="model roadmap — closed-form v1 → learned decay v2 → transfer GNN v3"
            className="h-[250px]"
          />
        </div>
      </ProjectSection>
    </ProjectShell>
  );
}
