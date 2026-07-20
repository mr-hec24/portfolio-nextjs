// src/app/portfolio/interleave/page.tsx

import React from "react";
import Link from "next/link";

const InterleaveProjectPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <header className="text-center mb-10 p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-2 leading-tight">
                    Interleave, by Hec Labs
                </h1>
                <p className="text-xl text-indigo-700 font-medium">
                    Cross-Domain Practice Scheduler · AI & Learning Science
                </p>
            </header>

            {/* Hero Image */}
            <img
                src="/images/portfolio/interleave-hero.png"
                alt="Interleave — the practice conductor for multi-skill learners"
                className="w-full rounded-xl shadow-2xl mb-12 aspect-video object-cover"
                style={{ maxHeight: "600px" }}
            />

            <section className="mb-12 p-8 bg-white rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-5 border-b-2 border-indigo-200 pb-2">
                    Overview & The Problem
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    Interleave is a cross-domain practice scheduler for people learning
                    several unrelated skills at once — for example, music, a language, and
                    programming. It answers a question no existing tool does: not{" "}
                    <em>when</em> should I review this card, but <em>which</em> skill
                    should I practice next, and for how long?
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    The positioning: the practice conductor for multi-skill learners. Anki
                    and FSRS tell you when a card is due; Interleave decides which skill to
                    practice next, and for how long. The self-regulated-learning research is
                    blunt about why this matters — learners left to their own devices prefer
                    blocked practice, trust fluency illusions, and mis-schedule the very
                    skills that most need attention. The scheduling decision itself is the
                    problem worth solving.
                </p>
            </section>

            <section className="mb-12 p-8 bg-indigo-50 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-indigo-800 mb-5 border-b-2 border-indigo-300 pb-2">
                    My Role & Contributions
                </h2>
                <p className="text-lg text-indigo-900 leading-relaxed">
                    As <strong>solo founder</strong> I own the design end to end.
                    Specifically:
                </p>
                <ul className="list-disc list-inside ml-6 text-lg text-indigo-900 space-y-2 mt-4">
                    <li>
                        <strong>Model design:</strong> the utility-maximization loop, the
                        saturating desirable-difficulty urgency curve, the four-channel
                        cognitive-fatigue model, and the hysteresis-based switching policy
                        that makes session length emergent.
                    </li>
                    <li>
                        <strong>Architecture & roadmap:</strong> a closed-form v1 with zero
                        trained parameters, plus a data-gated path to a learned decay model
                        (v2) and a cross-skill transfer GNN (v3).
                    </li>
                    <li>
                        <strong>Research grounding:</strong> a structured reading of the
                        memory, interleaving, self-regulated-learning, and knowledge-tracing
                        literature, used to separate validated mechanisms from novel ones.
                    </li>
                </ul>
            </section>

            <section className="mb-12 p-8 bg-white rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-5 border-b-2 border-indigo-200 pb-2">
                    Technologies Used
                </h2>
                <ul className="list-disc list-inside ml-6 text-lg text-gray-700 space-y-2">
                    <li>
                        <strong>Language & runtime:</strong> TypeScript on Node.js
                    </li>
                    <li>
                        <strong>Backend:</strong> Supabase (Postgres for the append-only
                        logging spine, plus auth)
                    </li>
                    <li>
                        <strong>Semantic graph:</strong> text-embedding models for
                        skill-similarity edges; LLM-based extraction of the skill graph and
                        prerequisite DAG
                    </li>
                    <li>
                        <strong>Scheduling core:</strong> FSRS-style spaced-repetition
                        stability updates; closed-form leaky-integrator fatigue model
                    </li>
                    <li>
                        <strong>Planned ML (data-gated, Python):</strong> the learned
                        models would live in a separate Python service — Half-Life
                        Regression (v2) and an inductive two-relation R-GCN (v3) — while the
                        TypeScript/Node.js scheduler and Supabase logging spine stay the core
                    </li>
                </ul>
            </section>

            <section className="mb-12 p-8 bg-indigo-50 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-indigo-800 mb-5 border-b-2 border-indigo-300 pb-2">
                    Solution & Approach: The Utility Loop
                </h2>
                <p className="text-lg text-indigo-900 mb-4 leading-relaxed">
                    Every tick, Interleave scores each skill with a single utility function
                    combining four forces: <strong>urgency</strong> (is this skill in the
                    effortful-but-recoverable &quot;desirable difficulty&quot; band?),{" "}
                    <strong>fatigue</strong> (how loaded are the cognitive channels this
                    skill draws on?), <strong>readiness</strong> (are its prerequisites
                    mastered?), and <strong>interference</strong> (was something
                    semantically adjacent just practiced?). A hard reachability mask excludes
                    any skill with an unmet prerequisite.
                </p>
                <p className="text-lg text-indigo-900 mb-4 leading-relaxed">
                    Two design decisions are deliberate. Urgency saturates rather than
                    following a symmetric bell curve: an overdue skill stays at maximum
                    urgency instead of being deprioritized forever — avoiding a death spiral
                    for exactly the skills that most need rescue. And switching uses
                    hysteresis: Interleave only leaves the current skill when a rival&apos;s
                    utility beats it by a margin, so the schedule doesn&apos;t thrash at
                    every crossover and session length becomes emergent — controlled by one
                    interpretable knob rather than a fixed timer.
                </p>
                <p className="text-lg text-indigo-900 leading-relaxed">
                    v1 ships fully closed-form with zero trained parameters, so cold-start is
                    perfect by construction. Its one real obligation is the logging spine:
                    every interaction is recorded from day one in the exact schema future
                    models will train on. The log is the asset — training data, product
                    analytics, and research corpus are the same table.
                </p>
            </section>

            <section className="mb-12 p-8 bg-white rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-5 border-b-2 border-indigo-200 pb-2">
                    Scientific Honesty (a brand pillar)
                </h2>
                <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    Interleave is careful about what it claims. The classic interleaving
                    effect — the one that makes shuffled practice beat blocked practice —
                    depends on similar, confusable categories and does not transfer to
                    unrelated domains (Brunmair &amp; Richter, 2019). So Interleave never
                    claims that effect for cross-domain switching.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Instead, the cross-domain benefit is claimed via three distinct
                    mechanisms: forced spacing, contextual-interference-style variability,
                    and channel-level fatigue relief. Components with no direct empirical
                    validation — the four-channel fatigue model, the extrapolation of
                    item-level decay to whole skills, and the size of any cross-domain
                    transfer effect — are explicitly flagged as novel and instrumented for
                    testing, not presented as settled science. Cross-domain transfer
                    coefficients initialize at zero and must be discovered from real learner
                    data before any transfer is asserted.
                </p>
            </section>

            <section className="mb-12 p-8 bg-indigo-50 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-indigo-800 mb-5 border-b-2 border-indigo-300 pb-2">
                    Roadmap & Intended Impact
                </h2>
                <p className="text-lg text-indigo-900 mb-6 leading-relaxed">
                    Interleave is in early development (v1), so the following are framed as{" "}
                    <strong>intended</strong> outcomes rather than achieved results:
                </p>

                <div className="space-y-6">
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                        <h3 className="text-2xl font-semibold text-indigo-800 mb-3 border-b border-indigo-200 pb-2">
                            Multi-skill learners:
                        </h3>
                        <ul className="list-disc list-inside ml-6 text-lg text-indigo-900 space-y-1">
                            <li>
                                A single answer to &quot;what should I practice next?&quot;
                                across unrelated domains, replacing ad-hoc self-scheduling that
                                the research shows is systematically biased.
                            </li>
                            <li>
                                Emergent session structure tuned by one interpretable parameter
                                (the hysteresis margin), rather than rigid fixed-length study
                                blocks.
                            </li>
                        </ul>
                    </div>

                    <div className="p-4 bg-white rounded-lg shadow-sm">
                        <h3 className="text-2xl font-semibold text-indigo-800 mb-3 border-b border-indigo-200 pb-2">
                            Learning-science practice:
                        </h3>
                        <ul className="list-disc list-inside ml-6 text-lg text-indigo-900 space-y-1">
                            <li>
                                An honest cross-domain design: the benefit is claimed via forced
                                spacing, contextual-interference-style variability, and
                                channel-level fatigue relief — not the classic
                                discrimination-based interleaving effect, which requires
                                confusable categories that unrelated domains lack (Brunmair &amp;
                                Richter, 2019).
                            </li>
                            <li>
                                A logging spine built from day one so that novel components (the
                                fatigue model, cross-domain transfer coefficients) can be
                                empirically tested rather than assumed.
                            </li>
                        </ul>
                    </div>

                    <div className="p-4 bg-white rounded-lg shadow-sm">
                        <h3 className="text-2xl font-semibold text-indigo-800 mb-3 border-b border-indigo-200 pb-2">
                            The platform & roadmap:
                        </h3>
                        <ul className="list-disc list-inside ml-6 text-lg text-indigo-900 space-y-1">
                            <li>
                                A version sequence gated by data, not preference: closed-form v1,
                                linear Half-Life Regression at ~5-10k logged reviews, and a
                                two-relation inductive GNN only once it beats calibrated HLR on a
                                time-split evaluation.
                            </li>
                            <li>
                                Open-core intent: the algorithms and research are meant to be
                                open, with a hosted service funding the infrastructure.
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="text-base text-indigo-800 italic mt-6 leading-relaxed">
                    A closing note on scientific honesty, a brand pillar: components with no
                    direct empirical validation (the four-channel fatigue model, skill-level
                    decay extrapolation, cross-domain transfer) are explicitly flagged as
                    novel and instrumented for testing, not presented as established results.
                </p>
            </section>

            <section className="p-8 bg-indigo-50 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-indigo-800 mb-5 border-b-2 border-indigo-300 pb-2">
                    Visuals & Demos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
                    <div className="flex flex-col items-center text-center">
                        <Link
                            href="https://github.com/mr-hec24/interleave"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full max-w-xs px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center text-center text-sm font-medium"
                        >
                            GitHub Repository &rarr;
                        </Link>
                        <p className="text-gray-700 text-sm mt-2">
                            Source for the closed-form v1 scheduler
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center md:col-span-2">
                        <img
                            src="/images/portfolio/interleave-model-roadmap.png"
                            alt="Interleave model architecture roadmap, v1 through v3"
                            className="w-full h-48 object-cover rounded-lg shadow-md mb-3"
                        />
                        <p className="text-gray-700 text-sm">
                            Model architecture roadmap: closed-form v1 &rarr; learned decay v2
                            &rarr; transfer GNN v3.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InterleaveProjectPage;
