// src/app/portfolio/assistments/page.tsx

import React from 'react';
import Link from 'next/link';

const AssistmentsProjectPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <header className="text-center mb-10 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-2 leading-tight">
          Developing a Mastery Learning Service for ASSISTments
        </h1>
        <p className="text-xl text-indigo-700 font-medium">AI & Data Analytics</p>
      </header>

      {/* Hero Image Placeholder */}
      <img
        src="https://placehold.co/1200x600/E0E0E0/000000?text=ASSISTments+Project+Hero"
        alt="ASSISTments Project Hero Screenshot"
        className="w-full rounded-xl shadow-2xl mb-12 aspect-video object-cover"
        style={{ maxHeight: '600px' }}
      />

      <section className="mb-12 p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-5 border-b-2 border-indigo-200 pb-2">
          Overview & The Problem
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          ASSISTments is a widely used, free online education tool primarily designed for K-12 math instruction. It serves as a formative assessment platform that provides immediate feedback to students as they work through problems and offers real-time learning data to teachers. It also supports high-impact tutoring programs by integrating traditional learning materials with powerful digital tools.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          The core challenge addressed by this project was to enhance personalized learning and provide more granular, data-driven insights for teachers, schools, and researchers. By implementing a mastery learning service that accurately tracks and predicts student knowledge in real-time, we aimed to move beyond basic assessment to proactive, tailored educational support. The goal was to bridge the gap between students&apos; current understanding and their potential for mastery, ultimately freeing up valuable teacher time to focus on relationship-building and differentiated instruction.
        </p>
      </section>

      <section className="mb-12 p-8 bg-indigo-50 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-indigo-800 mb-5 border-b-2 border-indigo-300 pb-2">
          My Role & Contributions
        </h2>
        <p className="text-lg text-indigo-900 leading-relaxed">
          My primary role in this project involved the **development, training, and comparative analysis of machine learning models** to predict student skill mastery. My specific contributions included:
        </p>
        <ul className="list-disc list-inside ml-6 text-lg text-indigo-900 space-y-2 mt-4">
          <li>
            <strong>Model Development & Comparison:</strong> I was responsible for implementing and rigorously comparing two distinct machine learning models: a Logistic Regression model (often used in Performance Factor Analysis - PFA) and a Hidden Markov Model (Bayesian Knowledge Tracing - BKT). This involved setting up the experimental framework and evaluating their predictive capabilities for our specific use case.
          </li>
          <li>
            <strong>Data Analytics & Preprocessing:</strong> I performed extensive data cleaning and analysis on the ASSISTments dataset using SQL in PostgreDB to prepare the data for model training. This ensured the reliability and accuracy of the input features.
          </li>
          <li>
            <strong>API Backend Development:</strong> I contributed to the development of a RESTful API backend in Python, which would serve the trained models and facilitate real-time mastery predictions within the ASSISTments system.
          </li>
        </ul>
      </section>

      <section className="mb-12 p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-5 border-b-2 border-indigo-200 pb-2">
          Technologies Used
        </h2>
        <ul className="list-disc list-inside ml-6 text-lg text-gray-700 space-y-2">
          <li><strong>Programming Language:</strong> Python</li>
          <li><strong>Machine Learning Libraries:</strong> scikit-learn, numpy</li>
          <li><strong>Data Manipulation:</strong> pandas</li>
          <li><strong>Database:</strong> PostgreSQL (for SQL querying and data management)</li>
          <li><strong>Web Framework (for API):</strong> custom Python</li>
        </ul>
      </section>

      <section className="mb-12 p-8 bg-indigo-50 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-indigo-800 mb-5 border-b-2 border-indigo-300 pb-2">
          Solution & Approach: Bayesian Knowledge Tracing (BKT)
        </h2>
        <p className="text-lg text-indigo-900 mb-4 leading-relaxed">
          Our primary predictive solution centered around the **Bayesian Knowledge Tracing (BKT) model**, a probabilistic model rooted in cognitive science that mimics real-life learning processes. BKT operates on two unobserved (hidden) states for any given student-skill pairing: either the student has **not yet learned** the skill, or they **have learned** it.
        </p>
        <p className="text-lg text-indigo-900 mb-4 leading-relaxed">
          The model uses five core probabilities, learned from student interaction data, to track a student$apos;s knowledge state over time:
        </p>
        <ol className="list-decimal list-inside ml-6 text-lg text-indigo-900 space-y-2">
          <li>
            <strong>Initial Knowledge (P(L0)):</strong> The probability that a student already knows a skill before starting.
          </li>
          <li>
            <strong>Learn (P(T)):</strong> The probability that a student transitions from an unlearned state to a learned state after a successful attempt.
          </li>
          <li>
            <strong>Forget (P(F)):</strong> The probability that a student transitions from a learned state back to an unlearned state (representing forgetting).
          </li>
          <li>
            <strong>Guess (P(G)):</strong> The probability that a student in an unlearned state correctly answers a question by guessing.
          </li>
          <li>
            <strong>Slip (P(S)):</strong> The probability that a student in a learned state answers a question incorrectly due to a momentary mistake (slipping).
          </li>
        </ol>
        <p className="text-lg text-indigo-900 mt-4 leading-relaxed">
          By continuously updating these probabilities based on a student$apos;s sequence of correct or incorrect answers within ASSISTments, the BKT model provides a dynamic, real-time prediction of whether a student has mastered a particular skill. This allows for a granular understanding of individual learning progress.
        </p>
      </section>

      <section className="mb-12 p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-5 border-b-2 border-indigo-200 pb-2">
          Impact & Results (Intended)
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The development and analysis of this mastery learning service, particularly the BKT model, yielded significant potential impacts aligned with our goals for enhancing educational outcomes:
        </p>

        <div className="space-y-6">
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-700 mb-3 border-b border-gray-200 pb-2">For Students:</h3>
            <ul className="list-disc list-inside ml-6 text-lg text-gray-700 space-y-1">
              <li>
                <strong>Improved Learning Outcomes:</strong> By providing real-time insights into individual student mastery levels, the model could enable adaptive learning pathways, ensuring students receive targeted practice on concepts they haven&apos;t yet mastered. This was designed to lead to increased scores on subsequent assessments and faster skill acquisition.
              </li>
              <li>
                <strong>Personalized Support:</strong> The system&apos;s ability to identify specific knowledge gaps would allow for timely interventions and tailored resources, effectively reducing learning barriers and enhancing the student&apos;s overall educational experience.
              </li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-700 mb-3 border-b border-gray-200 pb-2">For Teachers:</h3>
            <ul className="list-disc list-inside ml-6 text-lg text-gray-700 space-y-1">
              <li>
                <strong>Reduced Administrative Workload:</strong> The insights from the model could be translated into actionable data dashboards, allowing teachers to quickly identify students at risk of falling behind or those ready for advanced material. This streamlines the identification of student needs for personalized intervention, potentially saving teachers significant time on manual assessment analysis (e.g., contributing to a **reduction of 10-15 hours per week** on data review and lesson planning).
              </li>
              <li>
                <strong>Enhanced Instructional Strategies:</strong> Teachers would gain clearer, data-driven perspectives, allowing them to focus more time on cultivating deeper student-teacher relationships and providing differentiated instruction.
              </li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-700 mb-3 border-b border-gray-200 pb-2">For ASSISTments (Platform/Researchers):</h3>
            <ul className="list-disc list-inside ml-6 text-lg text-gray-700 space-y-1">
              <li>
                <strong>Advanced Student Modeling:</strong> Our work contributed to the platform&apos;s ability to offer more sophisticated student modeling capabilities, directly supporting its mission to accelerate math achievement. This enhanced functionality could lead to **increased user adoption** by demonstrating cutting-edge pedagogical support.
              </li>
              <li>
                <strong>Research Insights:</strong> The comparative analysis of BKT with Performance Factor Analysis provided valuable research insights into the most effective predictive approaches for the large-scale ASSISTments dataset, informing future development.
              </li>
              <li>
                <strong>Ethical Considerations:</strong> A core component of our approach included a clear disclaimer stating that these predicted values are not meant to replace the crucial student-teacher relationship or serve as a basis for surveillance. Instead, they are intended purely as a compass to guide educators towards students who may be in need of extra support, reinforcing our human-first philosophy.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="p-8 bg-indigo-50 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-indigo-800 mb-5 border-b-2 border-indigo-300 pb-2">
          Visuals & Demos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
          <div className="flex flex-col items-center text-center">
            <Link
              href="[Link to research poster PDF or image]"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center text-center text-sm font-medium"
            >
              View Research Poster &rarr;
            </Link>
            <p className="text-gray-700 text-sm mt-2">Visual summary of methodology and findings</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Link
              href="[Link to your public BKT visualization website, if applicable]"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center text-center text-sm font-medium"
            >
              Interactive BKT Visualization &rarr;
            </Link>
            <p className="text-gray-700 text-sm mt-2">Live demonstration of the BKT model</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Link
              href="[Link to your personal public GitHub repo for relevant code, or a note about private code]"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center text-center text-sm font-medium"
            >
              Illustrative Code Snippets (GitHub) &rarr;
            </Link>
            <p className="text-gray-700 text-sm mt-2">Selected non-proprietary code examples</p>
          </div>
          {/* Add more image/chart placeholders as needed */}
          <div className="flex flex-col items-center text-center md:col-span-1">
            <img src="https://placehold.co/600x400/C0C0C0/000000?text=ASSISTments+Chart+Example" alt="Example Chart from ASSISTments Data" className="w-full h-48 object-cover rounded-lg shadow-md mb-3" />
            <p className="text-gray-700 text-sm">Example Data Visualization</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssistmentsProjectPage;
