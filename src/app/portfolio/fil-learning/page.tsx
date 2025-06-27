// src/app/portfolio/fall-in-love-learning/page.tsx

import React from 'react';
import Link from 'next/link';

const FallInLoveLearningProjectPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <header className="text-center mb-10 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-2 leading-tight">
          Fall In Love Learning LLC - Tutoring Company Website
        </h1>
        <p className="text-xl text-indigo-700 font-medium">Web Development</p>
      </header>

      {/* Hero Image Placeholder */}
      <img
        src="/images/portfolio/fil-learning-hero.png"
        alt="Fall In Love Learning Website Hero Screenshot"
        className="w-full rounded-xl shadow-2xl mb-12 aspect-video object-cover"
        style={{ maxHeight: '600px' }}
      />

      <section className="mb-12 p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-5 border-b-2 border-indigo-200 pb-2">
          Project Overview & Problem
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          This landing page allowed an easy place for customers to learn more about the company, see rates, services, and tutors. This webpage also provides free resources for students applying to college. The primary goal was to establish a professional and inviting online presence for a new tutoring venture, making information easily accessible and attracting potential clients.
        </p>
      </section>

      <section className="mb-12 p-8 bg-indigo-50 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-indigo-800 mb-5 border-b-2 border-indigo-300 pb-2">
          My Role & Contributions
        </h2>
        <p className="text-lg text-indigo-900 leading-relaxed">
          I was solely responsible for the end-to-end development of this static website, including front-end design and implementation.
        </p>
      </section>

      <section className="mb-12 p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-5 border-b-2 border-indigo-200 pb-2">
          Technologies Used
        </h2>
        <ul className="list-disc list-inside ml-6 text-lg text-gray-700 space-y-2">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
        </ul>
      </section>

      <section className="mb-12 p-8 bg-indigo-50 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-indigo-800 mb-5 border-b-2 border-indigo-300 pb-2">
          Solution & Approach
        </h2>
        <p className="text-lg text-indigo-900 leading-relaxed">
          My design philosophy centered on &apos;user-friendliness&apos; and &apos;visual appeal&apos;. I ensured the website was easy to understand and navigate by:
        </p>
        <ul className="list-disc list-inside ml-6 text-lg text-indigo-900 space-y-2 mt-4">
          <li>
            Developing a &apos;color scheme that is easy on the eyes&apos; and reflects the educational brand.
          </li>
          <li>
            &apos;Spacing out content&apos; intentionally to avoid clutter and improve readability.
          </li>
          <li>
            Providing &apos;clear navigation options&apos; for various sections (rates, services, tutors, resources) to enhance user experience.
          </li>
          <li>
            Leveraging &apos;Bootstrap for responsive design&apos;, ensuring optimal viewing and functionality across various devices (desktop, tablet, mobile).
          </li>
        </ul>
      </section>

      <section className="mb-12 p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-5 border-b-2 border-indigo-200 pb-2">
          Impact & Results (Intended)
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          The website was instrumental in establishing an &apos;immediate online credibility and professional storefront&apos; for the Fall In Love Learning LLC startup.
        </p>

        <div className="space-y-6">
          <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-700 mb-3 border-b border-gray-200 pb-2">For Website/Platform:</h3>
            <ul className="list-disc list-inside ml-6 text-lg text-gray-700 space-y-1">
              <li>
                &apos;Intended to increase customer acquisition by 20%&apos; by serving as the primary touchpoint for new client inquiries and service exploration.
              </li>
              <li>
                &apos;Intended to increase engagement with educational resources by 30%&apos; by providing a dedicated, easily navigable section for free college application guides and student resources, fostering community value and perceived expertise.
              </li>
              <li>
                &apos;Improved accessibility&apos; was a core design goal, ensuring a wider audience could access the information.
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
              href="https://mr-hec24.github.io/FIL_Learning/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center text-center text-sm font-medium"
            >
              View Live Demo &rarr;
            </Link>
            <p className="text-gray-700 text-sm mt-2">Interactive, deployed website</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Link
              href="https://github.com/mr-hec24/FIL_Learning"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-xs px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center text-center text-sm font-medium"
            >
              GitHub Repository &rarr;
            </Link>
            <p className="text-gray-700 text-sm mt-2">Source code for the landing page</p>
          </div>
          {/* Add more image placeholders for specific sections */}
          <div className="flex flex-col items-center text-center">
            <img src="/images/portfolio/fil-learning-services.png" alt="Fall In Love Learning Screenshot 1" className="w-full h-48 object-cover rounded-lg shadow-md mb-3" />
            <p className="text-gray-700 text-sm">Screenshot of Services Section</p>
          </div>
          <div className="flex flex-col items-center text-center md:col-span-1">
            <img src="/images/portfolio/fil-learning-resources.jpeg" alt="Fall In Love Learning Screenshot 2" className="w-full h-48 object-cover rounded-lg shadow-md mb-3" />
            <p className="text-gray-700 text-sm">Screenshot of Resources Page</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FallInLoveLearningProjectPage;
