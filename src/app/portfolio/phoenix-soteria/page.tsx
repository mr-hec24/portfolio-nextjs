// src/app/portfolio/phoenix-soteria/page.tsx

import React from "react";
import ProjectShell, {
  Aside,
  Body,
  Lead,
  Points,
  ProjectSection,
} from "@/components/project/ProjectShell";
import { Placeholder } from "@/components/ui";

export default function PhoenixSoteriaProjectPage() {
  return (
    <ProjectShell
      breadcrumb="PHOENIX SOTERIA"
      badge={{ kind: "wip", text: "WORK IN PROGRESS" }}
      category="MOBILE & AI"
      title="Phoenix Soteria"
      dek="A fitness and wellness tracker with privacy as a first-order constraint."
      tags={["React Native", "Python", "Supabase", "HealthKit / Google Fit"]}
      hero="/images/portfolio/phoenix-soteria-hero.png"
      heroAlt="Phoenix Soteria app"
      previous={{
        href: "/portfolio/fil-learning",
        title: "Fall In Love Learning",
      }}
      next={{ href: "/portfolio/interleave", title: "Interleave" }}
    >
      <ProjectSection label="01 / THE PROBLEM">
        <Lead>
          Most trackers count steps. Very few say anything useful about how
          you&apos;re doing.
        </Lead>
        <Body>
          Phoenix Soteria LLC needed a mobile application that goes past basic
          fitness tracking into personalized, AI-driven insight across physical{" "}
          <em>and</em> mental well-being — a holistic view rather than a step
          count. The app is designed to give users actionable data for their own
          wellness, with a path toward broader well-being initiatives inside
          educational and organizational contexts.
        </Body>
      </ProjectSection>

      <ProjectSection label="02 / MY ROLE">
        <Body>
          Leading mobile app development: UI/UX design for intuitive daily use,
          the AI-driven insight layer, and robust backend data synchronization.
          Core features are actively under development.
        </Body>
      </ProjectSection>

      <ProjectSection label="03 / THE APPROACH">
        <Body>
          The focus is an engaging daily-tracking experience that earns the right
          to give advice, with AI used for personalized recommendations and trend
          insight rather than novelty. Data synchronizes seamlessly between
          devices and the backend, and the interface is built to be clear and
          motivating enough to sustain adherence.
        </Body>
        <Body>
          Health data is the most sensitive category a consumer app can hold, so
          privacy and secure handling are treated as design constraints from the
          start — not a compliance step bolted on at the end.
        </Body>
      </ProjectSection>

      <ProjectSection label="04 / INTENDED IMPACT">
        <Points
          items={[
            <>
              <strong className="text-ink">For individuals</strong> — deeper
              engagement with personal health data and proactive management of
              well-being, with personalized guidance aimed at habits that
              actually stick.
            </>,
            <>
              <strong className="text-ink">For organizations</strong> — access to
              aggregated, anonymized wellness trends to inform strategic health
              initiatives, with potential to integrate into existing educational
              well-being programs.
            </>,
            <>
              <strong className="text-ink">For the platform</strong> — adoption
              driven by intuitive design and genuinely personalized features,
              architected to scale as the user base and feature set grow.
            </>,
          ]}
        />
        <Aside>
          Because this is a startup&apos;s core product and still in development,
          the full codebase isn&apos;t public. I&apos;m happy to walk through the
          architecture, the technical implementation, and my specific
          contributions in an interview or a private demo.
        </Aside>
      </ProjectSection>

      <ProjectSection label="05 / GALLERY" last>
        <div className="grid max-w-[66ch] gap-5 md:grid-cols-2">
          <Placeholder label="dashboard view" className="h-[230px]" />
          <Placeholder label="personalized insights" className="h-[230px]" />
        </div>
      </ProjectSection>
    </ProjectShell>
  );
}
