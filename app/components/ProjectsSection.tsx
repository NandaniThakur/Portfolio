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
    color: 'from-indigo-900/50 to-cyan-900/50',
    icon: '🛍️',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'Collaborative task management with real-time updates, team collaboration features, and beautiful UI.',
    technologies: ['React', 'Firebase', 'Tailwind CSS'],
    color: 'from-purple-900/50 to-indigo-900/50',
    icon: '✅',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description:
      'Beautiful weather app with location-based forecasts, interactive maps, and smooth animations.',
    technologies: ['React', 'OpenWeather API', 'D3.js'],
    color: 'from-cyan-900/50 to-purple-900/50',
    icon: '🌤️',
  },
  {
    id: 4,
    title: 'DevOps Automation',
    description:
      'Cloud infrastructure automation with Docker, Kubernetes, and CI/CD pipelines for seamless deployment.',
    technologies: ['Docker', 'Kubernetes', 'AWS', 'GitHub Actions'],
    color: 'from-indigo-900/50 to-purple-900/50',
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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-950 via-indigo-950 to-slate-950 relative overflow-hidden"
      id="projects"
    >
      {/* Decorative background elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-purple-900 rounded-full opacity-20 blur-3xl animate-float-clouds"></div>
      <div className="absolute bottom-40 right-0 w-80 h-80 bg-cyan-800 rounded-full opacity-15 blur-3xl animate-float-clouds" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16 scroll-reveal visible">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 mb-6 text-lg">
            Explore some of my recent work and passion projects
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
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
                className={`bg-linear-to-br ${project.color} rounded-2xl p-6 h-full border border-purple-500/30 shadow-lg shadow-purple-500/10 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 cursor-pointer relative overflow-hidden backdrop-blur-sm`}
              >
                {/* Animated background glow on hover */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and title */}
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{project.icon}</span>
                    <h3 className="text-xl font-bold text-slate-100">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Technology tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 text-cyan-300 rounded-full text-xs font-medium hover:bg-white/20 transition-all duration-300 border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View project link */}
                  <a
                    href={project.link || '#'}
                    className="inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors duration-300"
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
            className="inline-block px-8 py-4 bg-linear-to-r from-purple-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            See All Projects →
          </a>
        </div>
      </div>
    </section>
  );
}
