'use client';

import { useEffect, useRef } from 'react';

/**
 * ExperienceSection Component
 * 
 * Features:
 * - Timeline layout with Ghibli-inspired vine/leaf styling
 * - Scroll reveal animations
 * - Light animations on scroll
 * - Responsive design with vertical timeline
 */

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  skills: string[];
  icon: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    company: 'Tech Innovations Inc.',
    position: 'Senior Full-Stack Developer',
    period: '2022 - Present',
    description:
      'Leading the development of scalable web applications. Mentored junior developers and improved system performance by 40%.',
    skills: ['React', 'Node.js', 'AWS', 'TypeScript'],
    icon: '🚀',
  },
  {
    id: 2,
    company: 'Creative Web Studio',
    position: 'Full-Stack Developer',
    period: '2020 - 2022',
    description:
      'Built responsive web applications for diverse clients. Implemented CI/CD pipelines and containerized applications.',
    skills: ['Next.js', 'MongoDB', 'Docker', 'DevOps'],
    icon: '🎨',
  },
  {
    id: 3,
    company: 'StartUp Labs',
    position: 'Junior Developer',
    period: '2019 - 2020',
    description:
      'Developed frontend components and fixed bugs. Learned agile methodologies and collaborative development.',
    skills: ['React', 'JavaScript', 'CSS', 'Git'],
    icon: '🌱',
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Intersection Observer for scroll animations
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

    // Observe all experience items
    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-amber-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-amber-200 rounded-full opacity-5 blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-green-200 rounded-full opacity-5 blur-2xl"></div>

      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16 scroll-reveal visible">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Experience
          </h2>
          <p className="text-gray-600 mb-6">
            My professional journey and growth
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (on larger screens) */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-300 via-blue-300 to-amber-300 opacity-50 md:transform md:-translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                ref={(el) => {
                  if (el && !itemsRef.current.includes(el)) {
                    itemsRef.current.push(el);
                  }
                }}
                className={`scroll-reveal md:flex md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content card */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200 border-opacity-30 relative">
                    {/* Decorative leaf */}
                    <div className="absolute -top-4 -right-4 text-3xl">🍃</div>

                    {/* Content */}
                    <div className="pr-8">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{exp.icon}</span>
                        <h3 className="text-xl font-bold text-gray-800">
                          {exp.position}
                        </h3>
                      </div>

                      <p className="text-green-700 font-semibold mb-1">
                        {exp.company}
                      </p>

                      <p className="text-sm text-gray-500 mb-4">{exp.period}</p>

                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Skills tags */}
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="md:w-12 flex justify-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full border-4 border-white shadow-lg relative z-10 md:sticky md:top-1/2"></div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="text-center mt-12 text-4xl opacity-50">
          🌿
        </div>
      </div>
    </section>
  );
}
