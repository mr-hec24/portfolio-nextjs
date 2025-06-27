// src/app/page.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // For your headshot, if you want one on the landing page

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-50 to-purple-50 text-gray-800 p-4">
      <main className="max-w-4xl text-center p-8 bg-white rounded-xl shadow-2xl space-y-8 animate-fade-in">
        <Image
          src="/images/about/hector-1.JPG" // Replace with your image path
          alt="Hector A. Rodriguez"
          width={150}
          height={150}
          className="rounded-full shadow-lg border-4 border-indigo-300 mx-auto mb-4"
        />

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-4">
          Hector A. Rodriguez
        </h1>

        <p className="text-2xl md:text-3xl font-semibold text-indigo-700 mb-6">
          AI in Education Specialist
        </p>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
          Empowering schools and educators in cultivating deeper student-teacher relationships and enhancing learning outcomes by developing human-first web, app, data, and AI solutions, grounded in cutting-edge research.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="/portfolio"
            className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white text-xl font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <span>View My Portfolio</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>

          <Link
            href="/about"
            className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-600 text-xl font-semibold rounded-lg shadow-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 border-2 border-indigo-600 flex items-center justify-center space-x-2"
          >
            <span>Learn About Me</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </main>

    </div>
  );
}
