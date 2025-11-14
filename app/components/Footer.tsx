'use client';

/**
 * Footer Component
 * 
 * Simple and elegant footer with Ghibli aesthetic
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-green-100 to-blue-100 py-8 px-4 sm:px-6 lg:px-8 border-t border-green-300 border-opacity-30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-gray-800 mb-2">Nandani</h3>
            <p className="text-gray-600">Full-Stack Developer & DevOps</p>
          </div>

          {/* Quick links */}
          <div className="text-center">
            <h4 className="font-semibold text-gray-800 mb-3">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a
                href="#"
                className="text-gray-600 hover:text-green-700 transition-colors"
              >
                About
              </a>
              <br />
              <a
                href="#projects"
                className="text-gray-600 hover:text-green-700 transition-colors"
              >
                Projects
              </a>
              <br />
              <a
                href="#contact"
                className="text-gray-600 hover:text-green-700 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social links */}
          <div className="text-center sm:text-right">
            <h4 className="font-semibold text-gray-800 mb-3">Connect</h4>
            <div className="flex justify-center sm:justify-end gap-3">
              <a
                href="#"
                title="GitHub"
                className="text-2xl hover:scale-125 transition-transform"
              >
                🐙
              </a>
              <a
                href="#"
                title="LinkedIn"
                className="text-2xl hover:scale-125 transition-transform"
              >
                🔗
              </a>
              <a
                href="#"
                title="Twitter"
                className="text-2xl hover:scale-125 transition-transform"
              >
                𝕏
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-300 border-opacity-30 pt-8 text-center text-gray-600 text-sm">
          <p>
            © {currentYear} Nandani. Crafted with <span className="text-pink-500">💚</span> and inspired by
            Studio Ghibli.
          </p>
        </div>
      </div>
    </footer>
  );
}
