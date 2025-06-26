// src/app/portfolio/phoenix-soteria/page.tsx

import React from 'react';
import Link from 'next/link';

const PhoenixSoteriaProjectPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <header className="text-center mb-10 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-2 leading-tight">
          Phoenix Soteria LLC - AI-Powered Fitness & Wellness Tracker App
        </h1>
        <p className="text-xl text-indigo-700 font-medium">Mobile App Development & AI</p>
      </header>

      {/* Hero Image Placeholder */}
      <img
        src="https://placehold.co/1200x600/E0E0E0/000000?text=Phoenix+Soteria+App+Hero"
        alt="Phoenix Soteria App Hero Screenshot"
        className="w-full rounded-xl shadow-2xl mb-12 aspect-video object-cover"
        style={{ maxHeight: '600px' }}
      />

      <section className="mb-12 p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-5 border-b-2 border-indigo-200 pb-2">
          Overview & Problem Statement
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          The challenge is to develop a comprehensive mobile application for Phoenix Soteria LLC that goes beyond basic fitness tracking. It aims to offer personalized, AI-driven insights into both physical and mental well-being, fostering a holistic approach to health. The app is designed to provide users with actionable data and support for their wellness journey, potentially connecting to broader well-being initiatives within educational or organizational contexts.
        </p>
      </section>

      <section className="mb-12 p-8 bg-indigo-50 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-indigo-800 mb-5 border-b-2 border-indigo-300 pb-2">
          My Role & Contributions
        </h2>
        <p className="text-lg text-indigo-900 leading-relaxed">
          My contributions to this project include leading the mobile app development, designing the user interface and user experience (UI/UX) for intuitive interaction, implementing AI-driven insights for personalized tracking, and ensuring robust backend data synchronization. This is a work-in-progress, with core features actively under development.
        </p>
      </section>

      <section className="mb-12 p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-5 border-b-2 border-indigo-200 pb-2">
          Technologies Used
        </h2>
        <ul className="list-disc list-inside ml-6 text-lg text-gray-700 space-y-2">
          <li>React Native</li>
          <li>Python (for AI backend, e.g., Flask/FastAPI - *specify your choice*)</li>
          <li>MongoDB/Firebase (for data storage - *specify your choice*)</li>
          <li>HealthKit/Google Fit APIs (for fitness data integration - *specify if applicable*)</li>
        </ul>
      </section>

      <section className="mb-12 p-8 bg-indigo-50 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-indigo-800 mb-5 border-b-2 border-indigo-300 pb-2">
          Solution & Approach
        </h2>
        <p className="text-lg text-indigo-900 leading-relaxed">
          My approach focuses on creating an intuitive and engaging user experience for daily fitness tracking while leveraging AI for personalized recommendations and trend insights. The app prioritizes seamless data synchronization between devices and the backend. The interface is designed to be clear, visually appealing, and motivate user adherence. Ethical considerations around user data privacy and the secure handling of sensitive health information are paramount in the development process.
        </p>
      </section>

      <section className="mb-12 p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-5 border-b-2 border-indigo-200 pb-2">
          Impact & Results (Intended)
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          This app is intended to transform personal wellness management by providing intelligent, actionable insights that empower users to achieve their fitness and mental well-being goals. It seeks to foster a healthier and more productive environment for individuals and organizations.
        </p>

        <div className="space-y-6">
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-700 mb-3 border-b border-gray-200 pb-2">For Users (Students/Individuals):</h3>
            <ul className="list-disc list-inside ml-6 text-lg text-gray-700 space-y-1">
              <li>Increased engagement with personal health data and proactive management of well-being, potentially reducing stress and improving focus.</li>
              <li>Personalized guidance for fitness and mental health, leading to sustainable healthy habits.</li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-700 mb-3 border-b border-gray-200 pb-2">For Organizations (e.g., Schools):</h3>
            <ul className="list-disc list-inside ml-6 text-lg text-gray-700 space-y-1">
              <li>Access to aggregated (anonymized) wellness trends for strategic health initiatives, potentially leading to improved overall organizational health and productivity metrics.</li>
              <li>Potential for integration with educational well-being programs to foster a healthier learning and working environment.</li>
            </ul>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-700 mb-3 border-b border-gray-200 pb-2">For App/Platform:</h3>
            <ul className="list-disc list-inside ml-6 text-lg text-gray-700 space-y-1">
              <li>Aims for high user adoption through intuitive design and highly personalized AI features.</li>
              <li>Designed for scalability to support a growing user base and future feature expansions.</li>
            </ul>
          </div>
        </div>
        <p className="mt-8 p-4 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg text-md italic leading-relaxed">
          <span className="font-semibold">Note:</span> Due to the proprietary nature of this startup&apos;s core product and ongoing development, the full codebase for the Phoenix Soteria app is not publicly accessible. However, I would be pleased to discuss its architecture, specific technical implementations, and my code contributions in detail during an interview or a private demonstration.
        </p>
      </section>

      <section className="p-8 bg-indigo-50 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-indigo-800 mb-5 border-b-2 border-indigo-300 pb-2">
          Visuals & Demos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
          {/* Replace with actual image paths/URLs for screenshots */}
          <div className="flex flex-col items-center text-center">
            <img src="https://placehold.co/600x400/C0C0C0/000000?text=App+Screenshot+1" alt="Phoenix Soteria App Screenshot 1" className="w-full h-48 object-cover rounded-lg shadow-md mb-3" />
            <p className="text-gray-700 text-sm">App Dashboard View</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img src="https://placehold.co/600x400/D0D0D0/000000?text=App+Screenshot+2" alt="Phoenix Soteria App Screenshot 2" className="w-full h-48 object-cover rounded-lg shadow-md mb-3" />
            <p className="text-gray-700 text-sm">Personalized Insights Screen</p>
          </div>
          {/* Placeholder for video demo link/embed */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full aspect-video rounded-lg shadow-md overflow-hidden bg-gray-300 flex items-center justify-center">
              {/* If you have a YouTube/Vimeo embed code, put it here */}
              <span className="text-gray-600 text-sm">Video Demo Placeholder</span>
            </div>
            <p className="text-gray-700 text-sm mt-2">Short Video Demo (Work-in-Progress)</p>
          </div>
          {/* Optional: link to a public repo for non-proprietary code snippets */}
          <div className="flex flex-col items-center text-center">
            <Link href="[Link to your public GitHub repo for illustrative code snippets, if any]" target="_blank" rel="noopener noreferrer" className="w-full max-w-xs px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center text-center text-sm font-medium">
              Illustrative Code (GitHub) &rarr;
            </Link>
            <p className="text-gray-700 text-sm mt-2">Non-sensitive code examples</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhoenixSoteriaProjectPage;
