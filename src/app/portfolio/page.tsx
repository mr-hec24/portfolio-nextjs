// src/app/portfolio/page.tsx

import Link from 'next/link';
import React from 'react'; // React import is good practice even for simple static pages

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* ASSISTments Project Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
          <Link href="/portfolio/assistments" className="block">
            {/* You can replace this div with a small project image/thumbnail if you have one */}
            <div className="w-full h-48 bg-blue-200 flex items-center justify-center text-gray-700 text-center text-lg font-semibold p-4">
              AI & Data Analytics
              {/* Optional: <img src="/images/assistments-thumbnail.jpg" alt="ASSISTments thumbnail" className="w-full h-full object-cover" /> */}
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Developing a Mastery Learning Service for ASSISTments</h2>
              <p className="text-gray-700 text-base mb-4">
                Implemented a Bayesian Knowledge Tracing model to predict student math skill mastery and provide actionable insights for educators within the ASSISTments platform.
              </p>
              <span className="inline-block mt-2 text-indigo-600 hover:text-indigo-800 font-medium border-b-2 border-indigo-600 pb-1">
                Learn More &rarr;
              </span>
            </div>
          </Link>
        </div>

        {/* Fall In Love Learning Project Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
          <Link href="/portfolio/fil-learning" className="block">
            {/* You can replace this div with a small project image/thumbnail if you have one */}
            <div className="w-full h-48 bg-green-200 flex items-center justify-center text-gray-700 text-center text-lg font-semibold p-4">
              Web Development
              {/* Optional: <img src="/images/fil-thumbnail.jpg" alt="Fall In Love Learning thumbnail" className="w-full h-full object-cover" /> */}
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Fall In Love Learning LLC - Tutoring Company Website</h2>
              <p className="text-gray-700 text-base mb-4">
                A professional and inviting static landing page developed to establish an online presence for a new tutoring venture, providing information and free college application resources.
              </p>
              <span className="inline-block mt-2 text-indigo-600 hover:text-indigo-800 font-medium border-b-2 border-indigo-600 pb-1">
                Learn More &rarr;
              </span>
            </div>
          </Link>
        </div>

        {/* Phoenix Soteria Project Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
          <Link href="/portfolio/phoenix-soteria" className="block">
            {/* You can replace this div with a small project image/thumbnail if you have one */}
            <div className="w-full h-48 bg-purple-200 flex items-center justify-center text-gray-700 text-center text-lg font-semibold p-4">
              Mobile App Development & AI
              {/* Optional: <img src="/images/phoenix-thumbnail.jpg" alt="Phoenix Soteria thumbnail" className="w-full h-full object-cover" /> */}
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Phoenix Soteria LLC - AI-Powered Fitness & Wellness Tracker App</h2>
              <p className="text-gray-700 text-base mb-4">
                A work-in-progress mobile application integrating AI to provide personalized fitness tracking, health insights, and promote mental well-being for a holistic approach to student and organizational wellness.
              </p>
              <span className="inline-block mt-2 text-indigo-600 hover:text-indigo-800 font-medium border-b-2 border-indigo-600 pb-1">
                Learn More &rarr;
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
