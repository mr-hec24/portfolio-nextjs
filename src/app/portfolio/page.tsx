// src/app/portfolio/[slug]/page.tsx

import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';

// Define the TypeScript interface that matches your generalized project JSON structure
interface ProjectDetail {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  problemStatement: string;
  myRole: string;
  technologiesUsed: string[];
  solutionApproachDescription: string;
  impactSummary: {
    overall: string;
    points: Array<{
      stakeholder: string;
      details: string[];
    }>;
    specialNotes?: string;
  };
  visualsAndDemos: Array<{
    type: 'image' | 'live_demo' | 'github' | 'video' | 'link';
    src?: string;
    alt?: string;
    url?: string;
    label?: string;
  }>;
}

// Define the correct props type for a dynamic page component in Next.js App Router
// This is the most common and robust way to type it.
interface ProjectDetailPageProps {
  params: Promise<{slug: string}>;
  // searchParams can be an object with string keys and values that are string or array of strings, or undefined.
  searchParams?: { [key: string]: string | string[] | undefined };
}

// generateStaticParams tells Next.js which static paths to build at compile time.
export async function generateStaticParams() {
  const projectsDirectory = path.join(process.cwd(), 'src', 'data', 'projects');
  const filenames = await fs.readdir(projectsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.json$/, ''),
  }));
}

// getProjectData fetches the content for a specific project based on its slug.
async function getProjectData(slug: string): Promise<ProjectDetail | null> {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'projects', `${slug}.json`);
    const fileContent = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(fileContent) as ProjectDetail;
  } catch (error) {
    console.error(`Failed to load project data for slug: ${slug}:`, error);
    return null;
  }
}

// The main component for displaying an individual project.
// We explicitly destructure both params and searchParams.
// If searchParams is not used, ESLint might complain, but TypeScript will be happy.
// To satisfy ESLint, we'll use a discard variable if it's truly unused.
export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  // Use a discard variable to acknowledge 'searchParams' if it's not directly used
  // This satisfies ESLint's 'no-unused-vars' rule.
  // const _searchParams = searchParams;
    const resolvedParams = await params;
    const { slug }  = resolvedParams;

  const project = await getProjectData(slug);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8 bg-gray-100 rounded-lg shadow-md m-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Project Not Found</h1>
        <p className="text-lg text-gray-600">The project you are looking for does not exist or an error occurred.</p>
        <Link href="/portfolio" className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-300">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  const heroImage = project.visualsAndDemos.find(
    (item) => item.type === 'image' && item.alt?.toLowerCase().includes('hero')
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <header className="text-center mb-10 p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-2 leading-tight">
          {project.title}
        </h1>
        <p className="text-xl text-indigo-700 font-medium">{project.category}</p>
      </header>

      {heroImage && (
        <img
          src={heroImage.src}
          alt={heroImage.alt}
          className="w-full rounded-xl shadow-2xl mb-12 aspect-video object-cover"
          style={{ maxHeight: '600px' }}
        />
      )}

      <section className="mb-12 p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-5 border-b-2 border-indigo-200 pb-2">
          Problem Statement & Overview
        </h2>
        <p className="text-lg text-gray-700 mb-4 leading-relaxed">{project.problemStatement}</p>
      </section>

      <section className="mb-12 p-8 bg-indigo-50 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-indigo-800 mb-5 border-b-2 border-indigo-300 pb-2">
          My Role & Contributions
        </h2>
        <p className="text-lg text-indigo-900 leading-relaxed">{project.myRole}</p>
      </section>

      <section className="mb-12 p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-5 border-b-2 border-indigo-200 pb-2">
          Technologies Used
        </h2>
        <ul className="list-disc list-inside ml-6 text-lg text-gray-700 space-y-2">
          {project.technologiesUsed.map((tech, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-indigo-600">&bull;</span> {tech}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12 p-8 bg-indigo-50 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-indigo-800 mb-5 border-b-2 border-indigo-300 pb-2">
          Solution & Approach
        </h2>
        <p className="text-lg text-indigo-900 leading-relaxed">{project.solutionApproachDescription}</p>
      </section>

      <section className="mb-12 p-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-5 border-b-2 border-indigo-200 pb-2">
          Impact & Results (Intended)
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">{project.impactSummary.overall}</p>

        <div className="space-y-6">
          {project.impactSummary.points.map((pointGroup, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-700 mb-3 border-b border-gray-200 pb-2">
                For {pointGroup.stakeholder}:
              </h3>
              <ul className="list-disc list-inside ml-6 text-lg text-gray-700 space-y-1">
                {pointGroup.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start">
                    <span className="mr-2 text-green-600">&check;</span> {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {project.impactSummary.specialNotes && (
          <p className="mt-8 p-4 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded-lg text-md italic leading-relaxed">
            <span className="font-semibold">Note:</span> {project.impactSummary.specialNotes}
          </p>
        )}
      </section>

      <section className="p-8 bg-indigo-50 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-indigo-800 mb-5 border-b-2 border-indigo-300 pb-2">
          Visuals & Demos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
          {project.visualsAndDemos.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {item.type === 'image' && item.src && (
                <img
                  src={item.src}
                  alt={item.alt || `Project visual ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow-md mb-3"
                />
              )}
              {(item.type === 'live_demo' || item.type === 'github' || item.type === 'link') && item.url && (
                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-xs px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center text-center text-sm font-medium"
                >
                  {item.label || item.type.replace('_', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} &rarr;
                </Link>
              )}
              {item.type === 'video' && item.url && (
                <div className="w-full aspect-video rounded-lg shadow-md overflow-hidden">
                  <iframe
                    src={item.url}
                    title={item.label || "Project Video Demo"}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
