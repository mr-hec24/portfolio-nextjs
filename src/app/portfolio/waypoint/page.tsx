// src/app/portfolio/waypoint/page.tsx

import React from "react";
import Link from "next/link";

const WaypointProjectPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <header className="text-center mb-10 p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-2 leading-tight">
                    Waypoint
                </h1>
                <p className="text-xl text-indigo-700 font-medium">
                    The Roadtrip Method, Turned Into a Tool · AI & Language Learning
                </p>
            </header>

            {/* Hero Image */}
            <img
                src="/images/portfolio/waypoint-hero.png"
                alt="Waypoint — a language-learning web app built on the Roadtrip Method"
                className="w-full rounded-xl shadow-2xl mb-12 aspect-video object-cover"
                style={{ maxHeight: "600px" }}
            />

            <section className="mb-12 p-8 bg-white rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-5 border-b-2 border-indigo-200 pb-2">
                    Overview & The Problem
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    Waypoint is a language-learning web app that operationalizes the
                    immersion-based &quot;Roadtrip Method&quot; into structured Input /
                    Output / Maintenance sessions, with an AI-assisted speaking-and-writing
                    loop that turns your own mistakes into spaced-repetition flashcards.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Self-directed language learners are told to immerse, speak, and review —
                    but no single tool sequences those activities into a coherent daily
                    practice. Flashcard apps drill isolated cards with no connection to real
                    output; there is no bridge from &quot;I tried to say something and got it
                    wrong&quot; to &quot;that exact gap is now a card I review.&quot; Learners
                    are left to stitch together Anki, a voice recorder, a notebook, and a
                    tutor by hand, and most abandon the loop before it compounds.
                </p>
            </section>

            <section className="mb-12 p-8 bg-indigo-50 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-indigo-800 mb-5 border-b-2 border-indigo-300 pb-2">
                    My Role
                </h2>
                <p className="text-lg text-indigo-900 leading-relaxed">
                    <strong>Solo designer and full-stack developer.</strong> I adapted the
                    Roadtrip Method (an existing immersion pedagogy) into a concrete session
                    model, and built the entire app end to end:
                </p>
                <ul className="list-disc list-inside ml-6 text-lg text-indigo-900 space-y-2 mt-4">
                    <li>The React/TypeScript client and its session UI.</li>
                    <li>The Supabase data model and authentication.</li>
                    <li>
                        The two AI edge functions — transcription and
                        correction/flashcard mining.
                    </li>
                    <li>The SM-2 spaced-repetition engine.</li>
                    <li>The story-speaking practice loop that ties it all together.</li>
                </ul>
            </section>

            <section className="mb-12 p-8 bg-white rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-5 border-b-2 border-indigo-200 pb-2">
                    Solution & Approach: The Story-Speaking Cycle
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    Waypoint structures practice around the Roadtrip Method&apos;s three
                    pillars — Input, Output, and Maintenance — inside timed session blocks.
                    Its centerpiece is the Story-Speaking cycle: the learner records
                    themselves telling a story from a prompt, Whisper transcribes it, and a
                    three-column review workbench (what you said / what you meant / the right
                    way) has Claude generate corrections and mine the gaps into flashcards.
                </p>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    The learner then briefly drills those cards and re-records the same story
                    — repeating the cycle until the vocabulary and narrative stick. Cards
                    flow into an SM-2 review queue, so today&apos;s spoken mistake becomes
                    tomorrow&apos;s scheduled review.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    A parallel Writing flow uses the same review-and-mine workbench, and
                    dedicated Speaking and Writing pages let learners search past sessions,
                    rename them, study a single session&apos;s mined cards, or start an
                    exercise standalone.
                </p>
            </section>

            <section className="mb-12 p-8 bg-indigo-50 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-indigo-800 mb-5 border-b-2 border-indigo-300 pb-2">
                    Technologies Used
                </h2>
                <ul className="list-disc list-inside ml-6 text-lg text-indigo-900 space-y-2">
                    <li>
                        <strong>Language:</strong> TypeScript
                    </li>
                    <li>
                        <strong>Client:</strong> React 19 + Vite, Tailwind CSS v4
                    </li>
                    <li>
                        <strong>State:</strong> React Router, TanStack Query (server state),
                        Zustand (session state)
                    </li>
                    <li>
                        <strong>Backend:</strong> Supabase (Postgres, Auth, Storage, Edge
                        Functions)
                    </li>
                    <li>
                        <strong>Speech-to-text:</strong> OpenAI Whisper, via a Deno edge
                        function
                    </li>
                    <li>
                        <strong>Correction + flashcard mining:</strong> Anthropic Claude, via
                        a Deno edge function with structured JSON output
                    </li>
                    <li>
                        <strong>Scheduling:</strong> SM-2 spaced-repetition
                    </li>
                    <li>
                        <strong>Delivery:</strong> PWA (installable, offline-aware)
                    </li>
                </ul>
            </section>

            <section className="mb-12 p-8 bg-white rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-5 border-b-2 border-indigo-200 pb-2">
                    Impact & Intent
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Waypoint is in active development. Its aim is to close the loop between
                    production and review that self-study normally leaves open — making the
                    learner&apos;s own output the source of their spaced-repetition material,
                    inside a session structure that reflects an established immersion method
                    rather than ad-hoc drilling. The outcomes below are design intent rather
                    than measured results:
                </p>

                <div className="space-y-6">
                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <h3 className="text-2xl font-semibold text-gray-700 mb-3 border-b border-gray-200 pb-2">
                            Language learners:
                        </h3>
                        <ul className="list-disc list-inside ml-6 text-lg text-gray-700 space-y-1">
                            <li>
                                One tool that sequences immersion, speaking/writing output, and
                                review — instead of manually juggling a flashcard app, a
                                recorder, and a notebook.
                            </li>
                            <li>
                                Flashcards sourced from the learner&apos;s own mistakes, so
                                review time targets exactly the gaps that surfaced during real
                                production.
                            </li>
                        </ul>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <h3 className="text-2xl font-semibold text-gray-700 mb-3 border-b border-gray-200 pb-2">
                            The method:
                        </h3>
                        <ul className="list-disc list-inside ml-6 text-lg text-gray-700 space-y-1">
                            <li>
                                Turns the Roadtrip Method&apos;s Input / Output / Maintenance
                                pillars into a concrete, timed session flow a learner can
                                actually follow day to day.
                            </li>
                            <li>
                                The Story-Speaking cycle makes &quot;repeat the same story until
                                it&apos;s fluent&quot; a first-class, guided loop rather than a
                                vague instruction.
                            </li>
                        </ul>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                        <h3 className="text-2xl font-semibold text-gray-700 mb-3 border-b border-gray-200 pb-2">
                            The app / engineering:
                        </h3>
                        <ul className="list-disc list-inside ml-6 text-lg text-gray-700 space-y-1">
                            <li>
                                A clean layered architecture (domain entities → repository
                                interfaces → Supabase implementations → React Query hooks) that
                                keeps UI code free of direct database access.
                            </li>
                            <li>
                                AI keys never touch the client: transcription and correction run
                                in Supabase edge functions, which also expose availability probes
                                so the UI degrades gracefully when AI is unconfigured.
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="text-base text-gray-500 italic mt-6 leading-relaxed">
                    The pedagogical framework is adapted from the existing &quot;Roadtrip
                    Method&quot; immersion approach; Waypoint is the software implementation
                    of it, not the method&apos;s originator.
                </p>
            </section>

            <section className="p-8 bg-indigo-50 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-indigo-800 mb-5 border-b-2 border-indigo-300 pb-2">
                    Visuals & Links
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
                    <div className="flex flex-col items-center text-center">
                        <Link
                            href="https://github.com/mr-hec24/Waypoint"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full max-w-xs px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center text-center text-sm font-medium"
                        >
                            GitHub Repository &rarr;
                        </Link>
                        <p className="text-gray-700 text-sm mt-2">
                            Source for the Waypoint client and edge functions
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center md:col-span-2">
                        <img
                            src="/images/portfolio/waypoint-story-loop.png"
                            alt="The Story-Speaking cycle: record, transcribe, correct, mine flashcards, study, retake"
                            className="w-full h-48 object-cover rounded-lg shadow-md mb-3"
                        />
                        <p className="text-gray-700 text-sm">
                            The Story-Speaking cycle: record &rarr; transcribe &rarr; correct
                            &rarr; mine flashcards &rarr; study &rarr; retake.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WaypointProjectPage;
