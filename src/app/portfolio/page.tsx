// src/app/portfolio/page.tsx
import { promises as fs } from 'fs';
import path from 'path';
import Link from 'next/link';

// Simplified interface for listing projects
interface ProjectListItem {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  heroImageSrc?: string; // Optional: to display a small hero image on the list page
}

// Function to get all project data for the listing page
async function getAllProjects(): Promise<ProjectListItem[]> {
  const projectsDirectory = path.join(process.cwd(), 'src', 'data', 'projects');
  const filenames = await fs.readdir(projectsDirectory);

  const projects = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(projectsDirectory, filename);
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const data = JSON.parse(fileContent);

      // Find the hero image if it exists for the thumbnail
      const heroVisual = data.visualsAndDemos.find(
        (item: any) => item.type === 'image' && item.alt?.toLowerCase().includes('hero')
      );

      return {
        slug: data.slug,
        title: data.title,
        category: data.category,
        shortDescription: data.shortDescription,
        heroImageSrc: heroVisual ? heroVisual.src : undefined,
      };
    })
  );
  return projects;
}

// Main Portfolio Page Component
export default async function PortfolioPage() {
  const projects = await getAllProjects();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.slug} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300">
            <Link href={`/portfolio/${project.slug}`} className="block">
              {project.heroImageSrc ? (
                <img
                  src={project.heroImageSrc}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500 text-center text-sm p-4">
                  No Image Available
                </div>
              )}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h2>
                <p className="text-indigo-600 text-sm mb-3">{project.category}</p>
                <p className="text-gray-700 text-base mb-4">{project.shortDescription}</p>
                <span className="inline-block mt-2 text-indigo-600 hover:text-indigo-800 font-medium border-b-2 border-indigo-600 pb-1">
                  Learn More &rarr;
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
