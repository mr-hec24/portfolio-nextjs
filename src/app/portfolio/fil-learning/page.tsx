// src/app/portfolio/fil-learning/page.tsx

import React from "react";
import Image from "next/image";
import ProjectShell, {
  Body,
  Lead,
  Points,
  ProjectSection,
} from "@/components/project/ProjectShell";

export default function FallInLoveLearningProjectPage() {
  return (
    <ProjectShell
      breadcrumb="FALL IN LOVE LEARNING"
      badge={{ kind: "client", text: "CLIENT" }}
      category="WEB DEVELOPMENT"
      title="Fall In Love Learning"
      dek="A storefront and a free resource hub for a new tutoring company."
      tags={["HTML", "CSS", "JavaScript", "Bootstrap"]}
      actions={[
        {
          href: "https://mr-hec24.github.io/FIL_Learning/",
          label: "Live site ↗",
        },
        {
          href: "https://github.com/mr-hec24/FIL_Learning",
          label: "GitHub repo ↗",
          variant: "outline",
        },
      ]}
      hero="/images/portfolio/fil-learning-hero.png"
      heroAlt="Fall In Love Learning website"
      previous={{ href: "/portfolio/waypoint", title: "Waypoint" }}
      next={{ href: "/portfolio/phoenix-soteria", title: "Phoenix Soteria" }}
    >
      <ProjectSection label="01 / THE PROBLEM">
        <Lead>A new tutoring company with nowhere to point people.</Lead>
        <Body>
          Fall In Love Learning needed a professional, inviting online presence:
          somewhere prospective families could learn about the company, see rates
          and services, and meet the tutors. The site also hosts free resources
          for students applying to college — value offered up front rather than
          gated behind an enquiry form.
        </Body>
      </ProjectSection>

      <ProjectSection label="02 / MY ROLE">
        <Body>
          Solely responsible for end-to-end development of the static site,
          including front-end design and implementation.
        </Body>
      </ProjectSection>

      <ProjectSection label="03 / THE APPROACH">
        <Body>
          The design philosophy centred on being easy to read and easy to
          navigate — a site that answers a parent&apos;s questions without making
          them hunt.
        </Body>
        <Points
          items={[
            "A colour scheme that's easy on the eyes and reflects the educational brand.",
            "Content spaced out intentionally to avoid clutter and improve readability.",
            "Clear navigation across rates, services, tutors, and resources.",
            "Bootstrap for responsive layout, so the site holds up on desktop, tablet, and mobile.",
          ]}
        />
      </ProjectSection>

      <ProjectSection label="04 / INTENDED IMPACT">
        <Body>
          The site established immediate online credibility for the startup and
          gave it a professional storefront. The targets below were the
          engagement goals set at launch rather than measured outcomes.
        </Body>
        <Points
          items={[
            "Serve as the primary touchpoint for new client enquiries and service exploration.",
            "Drive engagement with the free college-application guides through a dedicated, easily navigable resource section — building community value and perceived expertise.",
            "Improve accessibility so a wider audience can reach the information.",
          ]}
        />
      </ProjectSection>

      <ProjectSection label="05 / GALLERY" last>
        <div className="grid max-w-[66ch] gap-5 md:grid-cols-2">
          <figure>
            <Image
              src="/images/portfolio/fil-learning-services.png"
              alt="Fall In Love Learning services section"
              width={600}
              height={230}
              className="h-[230px] w-full border border-line-2 object-cover"
            />
            <figcaption className="mt-3 font-mono text-[10px] tracking-[0.05em] text-muted">
              services section
            </figcaption>
          </figure>
          <figure>
            <Image
              src="/images/portfolio/fil-learning-resources.jpeg"
              alt="Fall In Love Learning free resources page"
              width={600}
              height={230}
              className="h-[230px] w-full border border-line-2 object-cover"
            />
            <figcaption className="mt-3 font-mono text-[10px] tracking-[0.05em] text-muted">
              free college-application resources
            </figcaption>
          </figure>
        </div>
      </ProjectSection>
    </ProjectShell>
  );
}
