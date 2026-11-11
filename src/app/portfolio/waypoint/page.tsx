// src/app/portfolio/waypoint/page.tsx

import React from "react";
import ProjectShell, {
  Aside,
  Body,
  Lead,
  Points,
  ProjectSection,
} from "@/components/project/ProjectShell";
import { Placeholder } from "@/components/ui";

export default function WaypointProjectPage() {
  return (
    <ProjectShell
      breadcrumb="WAYPOINT"
      badge={{ kind: "labs", text: "HEC LABS" }}
      category="AI & LANGUAGE LEARNING"
      title="Waypoint"
      dek="The Roadtrip Method, turned into a tool."
      tags={[
        "React 19",
        "TypeScript",
        "Supabase",
        "Whisper",
        "Claude",
        "SM-2",
        "PWA",
      ]}
      actions={[
        {
          href: "https://github.com/mr-hec24/Waypoint",
          label: "GitHub repo ↗",
          variant: "outline",
        },
      ]}
      heroLabel="hero — story-speaking review workbench"
      previous={{
        href: "/portfolio/assistments",
        title: "ASSISTments — mastery learning service",
      }}
      next={{ href: "/portfolio/fil-learning", title: "Fall In Love Learning" }}
    >
      <ProjectSection label="01 / THE PROBLEM">
        <Lead>
          Nothing bridges &ldquo;I said it wrong&rdquo; and &ldquo;that gap is
          now a card I review.&rdquo;
        </Lead>
        <Body>
          Self-directed language learners are told to immerse, speak, and review
          — but no single tool sequences those activities into a coherent daily
          practice. Flashcard apps drill isolated cards with no connection to
          real output.
        </Body>
        <Body>
          So learners stitch together Anki, a voice recorder, a notebook, and a
          tutor by hand. Most abandon the loop before it has a chance to
          compound.
        </Body>
      </ProjectSection>

      <ProjectSection label="02 / MY ROLE">
        <Body>
          Solo designer and full-stack developer. I adapted the Roadtrip Method —
          an existing immersion pedagogy — into a concrete session model, and
          built the app end to end:
        </Body>
        <Points
          items={[
            "The React/TypeScript client and its session UI.",
            "The Supabase data model and authentication.",
            "The two AI edge functions — transcription, and correction/flashcard mining.",
            "The SM-2 spaced-repetition engine.",
            "The story-speaking practice loop that ties it all together.",
          ]}
        />
      </ProjectSection>

      <ProjectSection label="03 / THE APPROACH">
        <Body>
          Waypoint structures practice around the Roadtrip Method&apos;s three
          pillars — Input, Output, and Maintenance — inside timed session blocks.
          Its centrepiece is the{" "}
          <strong className="text-ink">Story-Speaking cycle</strong>: the learner
          records themselves telling a story from a prompt, Whisper transcribes
          it, and a three-column review workbench (what you said / what you meant
          / the right way) has Claude generate corrections and mine the gaps into
          flashcards.
        </Body>
        <Body>
          The learner then drills those cards briefly and re-records the same
          story, repeating until the vocabulary and narrative stick. Cards flow
          into an SM-2 review queue, so today&apos;s spoken mistake becomes
          tomorrow&apos;s scheduled review.
        </Body>
        <Body>
          A parallel Writing flow uses the same review-and-mine workbench, and
          dedicated Speaking and Writing pages let learners search past sessions,
          rename them, study a single session&apos;s mined cards, or start an
          exercise standalone.
        </Body>
      </ProjectSection>

      <ProjectSection label="04 / INTENDED IMPACT">
        <Body>
          Waypoint is in active development, so these are design intent rather
          than measured results.
        </Body>
        <Points
          items={[
            <>
              <strong className="text-ink">Language learners</strong> — one tool
              that sequences immersion, output, and review, with flashcards
              sourced from the learner&apos;s own mistakes so review time targets
              exactly the gaps that surfaced during real production.
            </>,
            <>
              <strong className="text-ink">The method</strong> — turns Input /
              Output / Maintenance into a concrete, timed flow a learner can
              actually follow day to day, and makes &ldquo;repeat the same story
              until it&apos;s fluent&rdquo; a first-class guided loop rather than
              a vague instruction.
            </>,
            <>
              <strong className="text-ink">The engineering</strong> — a layered
              architecture (domain entities → repository interfaces → Supabase
              implementations → React Query hooks) that keeps UI code free of
              direct database access. AI keys never touch the client:
              transcription and correction run in edge functions that also expose
              availability probes, so the UI degrades gracefully when AI is
              unconfigured.
            </>,
          ]}
        />
        <Aside>
          The pedagogical framework is adapted from the existing Roadtrip Method
          immersion approach. Waypoint is the software implementation of it, not
          the method&apos;s originator.
        </Aside>
      </ProjectSection>

      <ProjectSection label="05 / GALLERY" last>
        <div className="grid max-w-[66ch] gap-5">
          <Placeholder
            label="story-speaking cycle — record → transcribe → correct → mine → study → retake"
            className="h-[250px]"
          />
        </div>
      </ProjectSection>
    </ProjectShell>
  );
}
