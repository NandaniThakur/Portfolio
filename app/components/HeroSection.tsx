'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

/**
 * HeroSection Component
 * 
 * Features:
 * - Ghibli-inspired soft background with gradient
 * - Floating animation on text elements
 * - Smooth fade-in animation on load
 * - Call-to-action buttons (Hire Me & Projects)
 * - Responsive design
 */
export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add fade-in animation to hero section on mount
    if (heroRef.current) {
      heroRef.current.classList.add('fade-in');
    }
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-b from-slate-950 via-indigo-950 to-slate-950"
    >

      <div className="absolute inset-0 pointer-events-none">

        {/* Drifting petals - multiple for depth */}
        <div className="absolute text-3xl opacity-50 drift-petals" style={{ left: '10%', top: '-10%', animationDelay: '0s' }}>🌸</div>
        <div className="absolute text-2xl opacity-40 drift-petals" style={{ left: '25%', top: '-15%', animationDelay: '1s' }}>🌸</div>
        <div className="absolute text-3xl opacity-35 drift-petals" style={{ right: '15%', top: '-20%', animationDelay: '2s' }}>🌸</div>
        <div className="absolute text-2xl opacity-45 drift-petals" style={{ right: '5%', top: '-5%', animationDelay: '3s' }}>🌸</div>
      </div>

     

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl">
        {/* Floating greeting text */}
        <div className="float mb-6">
          <p className="text-lg text-cyan-300 font-medium tracking-wide">
            ✨ Welcome to my digital garden ✨
          </p>
        </div>

        {/* Main heading with fade-in */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-100 mb-6 leading-tight">
          Hello, I'm
          <br />
          <span className="bg-linear-to-r from-purple-400 via-cyan-300 to-purple-400 text-transparent bg-clip-text">
            Nandani
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-slate-300 mb-8 font-light">
          Full-Stack Developer & DevOps Enthusiast
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          I craft beautiful, scalable web experiences with modern technologies.
          Passionate about clean code, stunning designs, and solving complex problems.
        </p>

        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Hire Me button with glow effect */}
          <a
            href="#contact"
            className="glow-button px-8 py-4 bg-linear-to-r from-purple-600 to-cyan-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            ✉️ Hire Me
          </a>

          {/* Projects button */}
          <a
            href="#projects"
            className="px-8 py-4 border-2 border-cyan-500 text-cyan-300 rounded-full font-semibold text-lg hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
          >
            📁 View Projects
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
