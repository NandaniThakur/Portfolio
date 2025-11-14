'use client';

import { useEffect, useState } from 'react';

/**
 * Navigation Component
 * 
 * Sticky navigation with smooth scroll behavior
 * Responsive mobile menu
 */
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event for sticky navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950 bg-opacity-90 backdrop-blur-md shadow-lg shadow-purple-900/30 border-b border-purple-500/20'
          : 'bg-linear-to-b from-slate-950 via-slate-950 to-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-bold bg-linear-to-r from-purple-400 to-cyan-300 text-transparent bg-clip-text hover:from-purple-300 hover:to-cyan-200 transition-all duration-300"
          >
            ✨ Nandani
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-2 bg-linear-to-r from-purple-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-slideInUp">
            <a
              href="#"
              onClick={handleNavClick}
              className="block py-2 text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={handleNavClick}
              className="block py-2 text-slate-300 hover:text-cyan-400 transition-colors font-medium"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={handleNavClick}
              className="block mt-4 px-6 py-2 bg-linear-to-r from-purple-500 to-cyan-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-center"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
