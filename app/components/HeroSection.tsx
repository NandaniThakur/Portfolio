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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-100 via-green-50 to-amber-50"
    >
      {/* Animated background elements - soft Ghibli aesthetic */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-0 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl">
        {/* Floating greeting text */}
        <div className="float mb-6">
          <p className="text-lg text-green-700 font-medium tracking-wide">
            ✨ Welcome to my digital garden ✨
          </p>
        </div>

        {/* Main heading with fade-in */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
          Hello, I'm
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-green-500 to-amber-600 text-transparent bg-clip-text">
            Nandani
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-700 mb-8 font-light">
          Full-Stack Developer & DevOps Enthusiast
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          I craft beautiful, scalable web experiences with modern technologies.
          Passionate about clean code, stunning designs, and solving complex problems.
        </p>

        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Hire Me button with glow effect */}
          <a
            href="#contact"
            className="glow-button px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            ✉️ Hire Me
          </a>

          {/* Projects button */}
          <a
            href="#projects"
            className="px-8 py-4 border-2 border-green-600 text-green-700 rounded-full font-semibold text-lg hover:bg-green-50 transition-all duration-300"
          >
            📁 View Projects
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-green-700"
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
