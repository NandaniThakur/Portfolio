'use client';

import { useEffect, useRef } from 'react';

/**
 * ProjectsSection Component
 * 
 * Features:
 * - Responsive grid layout
 * - Hover animations with scale and shadow effects
 * - Ghibli-inspired color palette
 * - Scroll reveal animations
 * - Project cards with descriptions and tags
 */

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  color: string;
  icon: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with real-time inventory, payment integration, and admin dashboard.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    color: 'from-blue-100 to-cyan-100',
    icon: '🛍️',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'Collaborative task management with real-time updates, team collaboration features, and beautiful UI.',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    color: 'from-green-100 to-emerald-100',
    icon: '✅',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description:
      'Beautiful weather app with location-based forecasts, interactive maps, and smooth animations.',
    technologies: ['React', 'OpenWeather API', 'D3.js'],
    color: 'from-purple-100 to-pink-100',
    icon: '🌤️',
  },
  {
    id: 4,
    title: 'DevOps Automation',
    description:
      'Cloud infrastructure automation with Docker, Kubernetes, and CI/CD pipelines for seamless deployment.',
    technologies: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions'],
    color: 'from-amber-100 to-orange-100',
    icon: '⚙️',
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Intersection Observer for scroll-reveal animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all project cards
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-blue-50 relative overflow-hidden"
      id="projects"
    >
      {/* Decorative background elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-green-200 rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-40 right-0 w-80 h-80 bg-blue-200 rounded-full opacity-5 blur-3xl"></div>

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16 scroll-reveal visible">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Explore some of my recent work and passion projects
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el && !cardsRef.current.includes(el)) {
                  cardsRef.current.push(el);
                }
              }}
              className="scroll-reveal group h-full"
            >
              {/* Project card */}
              <div
                className={`bg-gradient-to-br ${project.color} rounded-2xl p-6 h-full border border-opacity-30 border-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer relative overflow-hidden`}
              >
                {/* Animated background glow on hover */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and title */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{project.icon}</span>
                    <h3 className="text-xl font-bold text-gray-800">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Technology tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white bg-opacity-40 text-gray-700 rounded-full text-xs font-medium hover:bg-opacity-60 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View project link */}
                  <a
                    href={project.link || '#'}
                    className="inline-flex items-center text-green-700 font-semibold hover:text-green-600 transition-colors duration-300"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7m0 0l-7 7m7-7H5"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all projects button */}
        <div className="text-center mt-12 scroll-reveal">
          <a
            href="#"
            className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            See All Projects →
          </a>
        </div>
      </div>
    </section>
  );
}
