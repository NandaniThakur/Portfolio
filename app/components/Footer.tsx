'use client';

/**
 * Footer Component
 * 
 * Simple and elegant footer with Ghibli aesthetic
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-r from-slate-950 via-indigo-950 to-slate-950 py-8 px-4 sm:px-6 lg:px-8 border-t border-purple-500/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-slate-100 mb-2">Nandani</h3>
            <p className="text-slate-400">Full-Stack Developer & DevOps</p>
          </div>

          {/* Quick links */}
          <div className="text-center">
            <h4 className="font-semibold text-slate-100 mb-3">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                About
              </a>
              <br />
              <a
                href="#projects"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Projects
              </a>
              <br />
              <a
                href="#contact"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social links */}
          <div className="text-center sm:text-right">
            <h4 className="font-semibold text-slate-100 mb-3">Connect</h4>
            <div className="flex justify-center sm:justify-end gap-3">
              <a
                href="#"
                title="GitHub"
                className="text-2xl hover:scale-125 transition-transform hover:text-cyan-400"
              >
                🐙
              </a>
              <a
                href="#"
                title="LinkedIn"
                className="text-2xl hover:scale-125 transition-transform hover:text-cyan-400"
              >
                🔗
              </a>
              <a
                href="#"
                title="Twitter"
                className="text-2xl hover:scale-125 transition-transform hover:text-cyan-400"
              >
                𝕏
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-purple-500/30 pt-8 text-center text-slate-400 text-sm">
          <p>
            © {currentYear} Nandani. Crafted with <span className="text-cyan-400">💚</span> and inspired by
            Studio Ghibli.
          </p>
        </div>
      </div>
    </footer>
  );
}
