// src/app/about/page.tsx

import React from 'react';
import Image from 'next/image'; // Use Next.js Image component for optimization
import Link from 'next/link';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="text-center mb-10 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-2 leading-tight">
          About Hector A. Rodriguez
        </h1>
        <p className="text-xl text-indigo-700 font-medium">AI in Education Specialist</p>
      </header>

      <section className="mb-12 p-8 bg-white rounded-xl shadow-lg flex flex-col items-center">
        {/* Your Professional Headshot */}
        <Image
          src="https://placehold.co/300x300/E0E0E0/000000?text=Your+Professional+Headshot" // Replace with your image path
          alt="Hector A. Rodriguez Professional Headshot"
          width={300} // Set appropriate width for optimization
          height={300} // Set appropriate height for optimization
          className="rounded-full shadow-lg mb-8 object-cover border-4 border-indigo-200"
        />

        <h2 className="text-3xl font-bold text-gray-800 mb-5 border-b-2 border-indigo-200 pb-2 text-center">
          Empowering Education Through Human-First Technology
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed text-center">
          As an AI in Education Specialist, I develop human-first web, app, data, and AI solutions, grounded in cutting-edge research. My mission is to empower schools and educators in cultivating deeper student-teacher relationships and enhancing learning outcomes.
        </p>
      </section>

      <section className="mb-12 p-8 bg-indigo-50 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-indigo-800 mb-5 border-b-2 border-indigo-300 pb-2">
          My Journey & Vision
        </h2>
        <p className="text-lg text-indigo-900 mb-4 leading-relaxed">
          My journey into technology is deeply rooted in my experience as an educator. I&apos;ve seen firsthand the challenges and opportunities at the intersection of teaching and technology. This unique perspective drives my approach: to build solutions that are not just innovative, but also practical, intuitive, and truly serve the needs of teachers and students. My passion lies in leveraging data and artificial intelligence to streamline administrative tasks for educators, providing them with valuable insights that free up their time to focus on what matters most – building meaningful relationships with their students.
        </p>
        <p className="text-lg text-indigo-900 leading-relaxed">
          I believe that technology should be a powerful assistant, not a replacement, in the learning environment. My goal is to bridge the gap between academic research and real-world classroom application, creating tools that make a tangible difference in learning experiences.
        </p>
      </section>

      <section className="mb-12 p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-5 border-b-2 border-indigo-200 pb-2">
          My Expertise
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">
          I specialize in creating custom EdTech solutions by combining my knowledge in:
        </p>
        <ul className="list-disc list-inside ml-6 text-lg text-gray-700 space-y-2">
          <li>**AI & Machine Learning:** Developing intelligent systems for data analysis and personalized learning.</li>
          <li>**Web Development:** Crafting robust and intuitive web applications (frontend & backend).</li>
          <li>**Mobile App Development:** Building engaging and functional mobile experiences.</li>
          <li>**Data Analytics:** Translating complex educational data into actionable insights.</li>
          <li>**Educational Research & Pedagogy:** Grounding solutions in effective learning theories.</li>
        </ul>
        <p className="text-lg text-gray-700 mt-4 leading-relaxed">
          My approach ensures that the tools I create are not only technologically advanced but also seamlessly integrate into diverse educational settings, empowering teachers and enriching student learning.
        </p>
      </section>

      <section className="p-8 bg-indigo-50 rounded-xl shadow-lg text-center">
        <h2 className="text-3xl font-bold text-indigo-800 mb-5">
          Let&apos;s Connect!
        </h2>
        <p className="text-lg text-indigo-900 mb-6 leading-relaxed">
          I&apos;m passionate about building impactful EdTech solutions. Explore my projects to see how I translate vision into functional applications, or connect with me to discuss how I can help your organization.
        </p>
        <Link
          href="/portfolio"
          className="inline-block px-8 py-4 bg-gray-800 text-white text-xl font-semibold rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300 mr-4"
        >
          View My Portfolio &rarr;
        </Link>
        <Link
          href="/contact" {/* Assuming you'll create a contact page later */}
          className="inline-block px-8 py-4 bg-white text-gray-800 text-xl font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-colors duration-300 border border-gray-800"
        >
          Get in Touch
        </Link>
        {/* Optional: Add social media links here */}
        {/* <div className="mt-8 text-2xl space-x-6">
            <a href="https://linkedin.com/in/hectorarodriguez" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-indigo-600 transition-colors"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/mr-hec24" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-indigo-600 transition-colors"><i className="fab fa-github"></i></a>
        </div> */}
      </section>
    </div>
  );
};

export default AboutPage;
