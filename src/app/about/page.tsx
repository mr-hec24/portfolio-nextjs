// src/app/about/page.tsx

import React from "react";
import Image from "next/image"; // Use Next.js Image component for optimization
import Link from "next/link";

const AboutPage: React.FC = () => {
  return (
    // This is the SINGLE root JSX element that the component returns.
    // All other content must be nested inside this div.
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="text-center mb-10 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-2 leading-tight">
          About Hector A. Rodriguez
        </h1>
        <p className="text-xl text-indigo-700 font-medium">
          AI in Education Specialist
        </p>
      </header>

      <section className="mb-12 p-8 bg-white rounded-xl shadow-lg flex flex-col items-center">
        {/* Your Professional Headshot */}
        <Image
          src="/images/about/hector-2.jpg" // Replace with your image path
          alt="Hector A. Rodriguez Professional Headshot"
          width={300} // Set appropriate width for optimization
          height={300} // Set appropriate height for optimization
          className="rounded-full shadow-lg mb-8 object-cover border-4 border-indigo-200"
        />

        <h2 className="text-3xl font-bold text-gray-800 mb-5 border-b-2 border-indigo-200 pb-2 text-center">
          Human-First Technology, Grounded in Learning Science
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed text-center">
          I build the software layer between learning science and the people
          it&apos;s meant to help: predictive models that flag which student
          could use a nudge, web and mobile apps that make practice actually
          happen, and data work that turns a firehose of interaction logs into
          something an educator can act on in five minutes.
        </p>
      </section>

      <section className="mb-12 p-8 bg-indigo-50 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-indigo-800 mb-5 border-b-2 border-indigo-300 pb-2">
          How I Got Here
        </h2>
        <p className="text-lg text-indigo-900 mb-4 leading-relaxed">
          My route into EdTech didn&apos;t run through a classroom of my own —
          it ran through one-on-one tables. I&apos;ve worked as a tutor, sitting
          with students through the problem they couldn&apos;t crack, and as a
          peer mentor for people a step behind me on the same path. I&apos;m
          also a relentless learner in my own right: most of what I do
          professionally, I taught myself, which means I&apos;ve been the
          confused person in the chair often enough to remember exactly what it
          feels like.
        </p>
        <p className="text-lg text-indigo-900 mb-4 leading-relaxed">
          That&apos;s a narrower vantage point than a teacher&apos;s, and I
          think it&apos;s a useful one. Tutoring shows you what aggregate data
          hides: a wrong answer is almost never one thing. It&apos;s a missing
          prerequisite, or a misread question, or plain fatigue, or a student
          who has quietly decided they&apos;re &quot;not a math person.&quot; In
          a spreadsheet, those look identical. Building tools that can tell them
          apart — and that hand the judgment back to a human — is the work I
          care about.
        </p>
        <p className="text-lg text-indigo-900 leading-relaxed">
          So I believe technology should be an assistant in the learning
          environment, never a replacement for it. The models I build are a
          compass, not a verdict: they point an educator toward a student who
          may need extra support, and they stop there. No surveillance, no
          ranking, no automated decisions made about a kid. And I try to stay
          honest about what&apos;s actually established — when I build something
          novel, I label it as novel and instrument it so it can be tested,
          rather than dressing it up as settled science.
        </p>
      </section>

      <section className="mb-12 p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-5 border-b-2 border-indigo-200 pb-2">
          My Expertise
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          I specialize in creating custom EdTech solutions by combining my
          knowledge in:
        </p>
        <ul className="list-disc list-inside ml-6 text-lg text-gray-700 space-y-2">
          <li>
            <strong>AI & Machine Learning:</strong> Student modeling with Bayesian Knowledge
            Tracing and Performance Factor Analysis, spaced-repetition scheduling, and
            applied ML for personalized learning.
          </li>
          <li>
            <strong>Web Development:</strong> Crafting robust and intuitive web applications
            (frontend & backend).
          </li>
          <li>
            <strong>Mobile App Development:</strong> Building engaging and functional mobile
            experiences.
          </li>
          <li>
            <strong>Data Analytics:</strong> Translating complex educational data into
            actionable insights.
          </li>
          <li>
            <strong>Learning Science:</strong> Reading the memory, interleaving, and
            knowledge-tracing literature closely, and translating it into product
            decisions I can defend.
          </li>
        </ul>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
          My approach ensures that the tools I create are not only
          technologically advanced but also seamlessly integrate into diverse
          educational settings, empowering teachers and enriching student
          learning.
        </p>
      </section>

      <section className="p-8 bg-indigo-50 rounded-xl shadow-lg text-center">
        <h2 className="text-3xl font-bold text-indigo-800 mb-5">
          Let&apos;s Connect!
        </h2>
        <p className="text-lg text-indigo-900 mb-6 leading-relaxed">
          I&apos;m passionate about building impactful EdTech solutions. Explore
          my projects to see how I translate vision into functional
          applications, or connect with me to discuss how I can help your
          organization.
        </p>
        <Link
          href="/portfolio"
          className="inline-block px-8 py-4 bg-gray-800 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300 mr-4"
        >
          View My Portfolio &rarr;
        </Link>
        <Link
          href="/contact" // Assuming you'll create a contact page later
          className="inline-block px-8 py-4 bg-white text-gray-800 text-xl font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300 border border-gray-800"
        >
          Get in Touch
        </Link>
      </section>
    </div> // This closing div tag must be present and correctly match the opening one
  );
};

export default AboutPage;
