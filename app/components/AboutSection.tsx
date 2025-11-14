'use client';

import { useEffect, useRef } from 'react';

/**
 * AboutSection Component
 * 
 * Features:
 * - Scroll reveal animation
 * - Soft card layout with Ghibli-inspired styling
 * - Two-column layout with illustration placeholder and bio
 * - Responsive design
 */
export default function AboutSection() {
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

    // Observe all cards
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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-green-50 relative overflow-hidden"
    >
      {/* Decorative floating elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-green-200 rounded-full opacity-10 blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 blur-2xl"></div>

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16 scroll-reveal visible">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Illustration placeholder card */}
          <div
            ref={(el) => {
              if (el && !cardsRef.current.includes(el)) {
                cardsRef.current.push(el);
              }
            }}
            className="scroll-reveal"
          >
            <div className="relative group">
              {/* Ghibli-style illustrated placeholder */}
              <div className="bg-gradient-to-br from-blue-100 via-green-100 to-amber-100 rounded-3xl p-8 aspect-square flex items-center justify-center relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 text-4xl">🍃</div>
                <div className="absolute bottom-4 left-4 text-4xl">🌸</div>
                <div className="absolute top-1/2 right-0 text-6xl opacity-20">🌙</div>

                {/* Placeholder text */}
                <div className="text-center z-10">
                  <p className="text-6xl mb-2">👩‍💻</p>
                  <p className="text-gray-600 font-medium">
                    [ Creative illustration would go here ]
                  </p>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-blue-300 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Bio and details card */}
          <div
            ref={(el) => {
              if (el && !cardsRef.current.includes(el)) {
                cardsRef.current.push(el);
              }
            }}
            className="scroll-reveal"
          >
            <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-green-200 border-opacity-30">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Crafting Digital Experiences
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                I'm a passionate full-stack developer with a love for building beautiful,
                functional applications. With expertise in modern web technologies and DevOps,
                I bridge the gap between stunning design and robust architecture.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing
                to open-source projects, or drawing inspiration from nature and art—much like
                the gentle worlds of Studio Ghibli.
              </p>

              {/* Skills list */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Key Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'React',
                    'Next.js',
                    'TypeScript',
                    'Tailwind CSS',
                    'Node.js',
                    'Docker',
                    'AWS',
                    'DevOps',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 rounded-full text-sm font-medium hover:from-green-200 hover:to-blue-200 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA link */}
              <a
                href="#contact"
                className="inline-block px-6 py-3 text-green-700 font-semibold hover:text-green-600 transition-colors duration-300"
              >
                Let's work together →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
