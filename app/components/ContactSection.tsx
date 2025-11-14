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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-green-50 relative overflow-hidden"
      id="contact"
    >
      {/* Decorative background */}
      <div className="absolute top-40 right-10 w-96 h-96 bg-purple-200 rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-80 h-80 bg-green-200 rounded-full opacity-5 blur-3xl"></div>

      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16 scroll-reveal visible">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg mb-2">
            Let's create something beautiful together
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Contact content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact information cards */}
          <div className="space-y-6 scroll-reveal visible">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Let's connect!
            </h3>

            {/* Email contact card */}
            <a
              href="mailto:nandani@example.com"
              className="flex items-start gap-4 p-6 bg-white bg-opacity-60 backdrop-blur-sm rounded-2xl border border-purple-200 border-opacity-30 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="text-3xl group-hover:animate-bounce">✉️</div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                <p className="text-gray-600 hover:text-purple-600 transition-colors">
                  nandani@example.com
                </p>
              </div>
            </a>

            {/* Phone contact card */}
            <a
              href="tel:+1234567890"
              className="flex items-start gap-4 p-6 bg-white bg-opacity-60 backdrop-blur-sm rounded-2xl border border-pink-200 border-opacity-30 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="text-3xl group-hover:animate-bounce">📱</div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                <p className="text-gray-600 hover:text-pink-600 transition-colors">
                  +1 (234) 567-8900
                </p>
              </div>
            </a>

            {/* Location card */}
            <div className="flex items-start gap-4 p-6 bg-white bg-opacity-60 backdrop-blur-sm rounded-2xl border border-green-200 border-opacity-30 hover:shadow-lg transition-all duration-300">
              <div className="text-3xl">📍</div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Location</h4>
                <p className="text-gray-600">San Francisco, CA</p>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-6">
              <h4 className="font-semibold text-gray-800 mb-4">Follow Me</h4>
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
                    className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 rounded-full text-xl hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:rotate-6"
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
              className="bg-white bg-opacity-70 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-purple-200 border-opacity-30"
            >
              {/* Name input */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-800 mb-2"
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
                  className="w-full px-4 py-3 bg-gradient-to-r from-green-50 to-blue-50 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Email input */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800 mb-2"
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
                  className="w-full px-4 py-3 bg-gradient-to-r from-green-50 to-blue-50 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Message textarea */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-800 mb-2"
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
                  className="w-full px-4 py-3 bg-gradient-to-r from-green-50 to-blue-50 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit button with glow effect */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 rounded-full font-bold text-white transition-all duration-300 transform hover:scale-105 ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'glow-button bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500'
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
                <div className="mt-4 p-4 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-400 rounded-lg text-green-800 font-semibold text-center animate-bounce">
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
