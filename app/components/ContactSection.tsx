'use client';

import { useState, useRef, useEffect } from 'react';

/**
 * ContactSection Component
 * 
 * Features:
 * - Clean contact form with validation
 * - Ghibli-style icons
 * - Glow effect on submit button
 * - Smooth animations
 * - Responsive design
 * - Contact info cards with social links
 */

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll reveal for contact section
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

    if (formRef.current) observer.observe(formRef.current);

    return () => {
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setFormData({ name: '', email: '', message: '' });

      // Hide success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-slate-950 via-indigo-950 to-slate-950 relative overflow-hidden"
      id="contact"
    >
      {/* Decorative background */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-purple-900 rounded-full opacity-20 blur-3xl animate-float-clouds"></div>
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-cyan-800 rounded-full opacity-15 blur-3xl animate-float-clouds" style={{ animationDelay: '3s' }}></div>

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16 scroll-reveal visible">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-lg mb-2">
            Let's create something beautiful together
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Contact content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact information cards */}
          <div className="space-y-6 scroll-reveal visible">
            <h3 className="text-2xl font-bold text-slate-100 mb-8">
              Let's connect!
            </h3>

            {/* Email contact card */}
            <a
              href="mailto:nandani@example.com"
              className="flex items-start gap-4 p-6 bg-slate-900 bg-opacity-50 backdrop-blur-sm rounded-2xl border border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="text-3xl group-hover:animate-bounce">✉️</div>
              <div>
                <h4 className="font-semibold text-slate-100 mb-1">Email</h4>
                <p className="text-slate-400 hover:text-cyan-400 transition-colors">
                  nandani@example.com
                </p>
              </div>
            </a>

            {/* Phone contact card */}
            <a
              href="tel:+1234567890"
              className="flex items-start gap-4 p-6 bg-slate-900 bg-opacity-50 backdrop-blur-sm rounded-2xl border border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="text-3xl group-hover:animate-bounce">📱</div>
              <div>
                <h4 className="font-semibold text-slate-100 mb-1">Phone</h4>
                <p className="text-slate-400 hover:text-cyan-400 transition-colors">
                  +1 (234) 567-8900
                </p>
              </div>
            </a>

            {/* Location card */}
            <div className="flex items-start gap-4 p-6 bg-slate-900 bg-opacity-50 backdrop-blur-sm rounded-2xl border border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
              <div className="text-3xl">📍</div>
              <div>
                <h4 className="font-semibold text-slate-100 mb-1">Location</h4>
                <p className="text-slate-400">San Francisco, CA</p>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-6">
              <h4 className="font-semibold text-slate-100 mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: '🐙', label: 'GitHub', link: '#' },
                  { icon: '🔗', label: 'LinkedIn', link: '#' },
                  { icon: '𝕏', label: 'Twitter', link: '#' },
                  { icon: '📸', label: 'Instagram', link: '#' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.link}
                    className="w-12 h-12 flex items-center justify-center bg-linear-to-br from-purple-900/50 to-cyan-900/50 rounded-full text-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-110 hover:rotate-6 border border-purple-500/30"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div
            ref={formRef}
            className="scroll-reveal"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-slate-900 bg-opacity-60 backdrop-blur-md rounded-3xl p-8 shadow-xl shadow-purple-500/10 border border-purple-500/30"
            >
              {/* Name input */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-slate-200 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nandani"
                  required
                  className="w-full px-4 py-3 bg-linear-to-r from-indigo-900/30 to-cyan-900/30 border border-purple-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-slate-200 placeholder-slate-500"
                />
              </div>

              {/* Email input */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-200 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full px-4 py-3 bg-linear-to-r from-indigo-900/30 to-cyan-900/30 border border-purple-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-slate-200 placeholder-slate-500"
                />
              </div>

              {/* Message textarea */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-slate-200 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-linear-to-r from-indigo-900/30 to-cyan-900/30 border border-purple-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 resize-none text-slate-200 placeholder-slate-500"
                ></textarea>
              </div>

              {/* Submit button with glow effect */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 rounded-full font-bold text-white transition-all duration-300 transform hover:scale-105 ${
                  isLoading
                    ? 'bg-slate-600 cursor-not-allowed'
                    : 'glow-button bg-linear-to-r from-purple-600 via-cyan-600 to-purple-600'
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin">⏳</span> Sending...
                  </span>
                ) : (
                  <span>✨ Send Message ✨</span>
                )}
              </button>

              {/* Success message */}
              {isSubmitted && (
                <div className="mt-4 p-4 bg-linear-to-r from-cyan-900/50 to-purple-900/50 border border-cyan-400/50 rounded-lg text-cyan-300 font-semibold text-center animate-bounce">
                  🎉 Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
