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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-indigo-950 via-slate-950 to-indigo-950 relative overflow-hidden"
    >
      {/* Decorative floating elements - soft glows */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-purple-900 rounded-full opacity-20 blur-2xl animate-float-clouds"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-cyan-800 rounded-full opacity-20 blur-2xl animate-float-clouds" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16 scroll-reveal visible">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
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
              <div className="bg-linear-to-br from-indigo-900 via-purple-900 to-indigo-900 rounded-3xl p-8 aspect-square flex items-center justify-center relative overflow-hidden border border-purple-500/30 shadow-lg shadow-purple-500/10">
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 text-4xl float-clouds">🍃</div>
                <div className="absolute bottom-4 left-4 text-4xl float-clouds" style={{ animationDelay: '2s' }}>🌸</div>
                <div className="absolute top-1/2 right-0 text-6xl opacity-30 animate-float-clouds">🌙</div>

                {/* Placeholder text */}
                <div className="text-center z-10">
                  <p className="text-6xl mb-2">👩‍💻</p>
                  <p className="text-slate-400 font-medium">
                    [ Creative illustration would go here ]
                  </p>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/30 to-cyan-500/30 rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-300"></div>
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
            <div className="bg-slate-900 bg-opacity-50 backdrop-blur-sm rounded-3xl p-8 shadow-lg shadow-purple-500/10 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-slate-100 mb-6">
                Crafting Digital Experiences
              </h3>

              <p className="text-slate-300 mb-4 leading-relaxed">
                I'm a passionate full-stack developer with a love for building beautiful,
                functional applications. With expertise in modern web technologies and DevOps,
                I bridge the gap between stunning design and robust architecture.
              </p>

              <p className="text-slate-300 mb-6 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing
                to open-source projects, or drawing inspiration from nature and art—much like
                the gentle worlds of Studio Ghibli.
              </p>

              {/* Skills list */}
              <div className="mb-6">
                <h4 className="font-semibold text-slate-200 mb-3">Key Skills:</h4>
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
                      className="px-4 py-2 bg-linear-to-r from-purple-900/50 to-cyan-900/50 text-cyan-300 rounded-full text-sm font-medium hover:from-purple-800/50 hover:to-cyan-800/50 transition-all duration-300 border border-purple-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA link */}
              <a
                href="#contact"
                className="inline-block px-6 py-3 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors duration-300"
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
