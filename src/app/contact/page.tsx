// src/app/contact/page.tsx

import React from "react";
import Link from "next/link";

const ContactPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-2xl text-center">
            <header className="mb-10 p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
                    Get In Touch
                </h1>
                <p className="text-xl text-indigo-700 font-medium">
                    Let&apos;s Build the Future of EdTech Together
                </p>
            </header>

            <section className="mb-12 p-8 bg-indigo-50 rounded-xl shadow-lg">
                <p className="text-lg text-indigo-900 mb-6 leading-relaxed">
                    I&apos;m always excited to connect with fellow innovators, educators,
                    and organizations who are passionate about transforming learning
                    through technology. Whether you have a project idea, a collaboration
                    opportunity, or just want to chat about the future of AI in education,
                    feel free to reach out!
                </p>

                <div className="space-y-6">
                    <div className="p-4 bg-white rounded-lg shadow-sm">
                        <h3 className="text-2xl font-semibold text-gray-700 mb-3 border-b border-gray-200 pb-2">
                            Email Me
                        </h3>
                        <a
                            href="mailto:your.email@example.com" // IMPORTANT: Replace with your actual professional email
                            className="text-indigo-600 hover:text-indigo-800 text-lg font-medium transition-colors duration-200 break-words"
                        >
                            your.email@example.com
                        </a>
                        <p className="text-sm text-gray-500 mt-2">
                            I aim to respond within 24-48 hours.
                        </p>
                    </div>

                    <div className="p-4 bg-white rounded-lg shadow-sm">
                        <h3 className="text-2xl font-semibold text-gray-700 mb-3 border-b border-gray-200 pb-2">
                            Connect Professionally
                        </h3>
                        <div className="flex justify-center space-x-6 text-3xl">
                            <Link
                                href="https://linkedin.com/in/your-linkedin-profile"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                            >
                                <span className="sr-only">LinkedIn</span>
                                <svg
                                    className="w-8 h-8"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </Link>
                            <Link
                                href="https://github.com/your-github-username"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
                            >
                                <span className="sr-only">GitHub</span>
                                <svg
                                    className="w-8 h-8"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017 2 16.223 4.675 19.865 8.31 21.725c.45.082.613-.195.613-.433 0-.214-.007-.78-.011-1.353-2.57.56-3.111-1.232-3.111-1.232-.42-.996-1.022-1.26-1.022-1.26-.83-.564.062-.553.062-.553.916.064 1.397.94 1.397.94.814 1.39 2.138.99 2.658.756.083-.586.319-.99.58-1.217-2.023-.23-4.148-1.012-4.148-4.505 0-1.002.359-1.82.95-2.464-.096-.23-.414-1.168.089-2.434 0 0 .78-.247 2.55.942.74-.207 1.52-.31 2.296-.314.776.004 1.536.107 2.296.314 1.77-1.189 2.55-.942 2.55-.942.503 1.266.186 2.204.09 2.434.59.644.949 1.462.949 2.464 0 3.493-2.128 4.27-4.156 4.5-.327.283-.61.802-.61 1.616 0 1.17.01 2.115.01 2.398 0 .238.163.518.618.431C19.333 19.862 22 16.22 22 12.017 22 6.484 17.522 2 12 2Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </Link>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                            Connect with me on social media.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
