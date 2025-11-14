/**
 * Home Page - Studio Ghibli Themed Portfolio
 * 
 * This is the main page that combines all sections:
 * 1. Navigation - Fixed sticky nav bar
 * 2. Hero Section - Eye-catching intro with floating animations
 * 3. About Section - Personal story and skills
 * 4. Projects Section - Featured portfolio projects
 * 5. Experience Section - Timeline of professional journey
 * 6. Contact Section - Contact form and details
 * 7. Footer - Site footer with links
 */

import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="bg-white overflow-hidden">
      {/* Navigation bar - sticky and always visible */}
      <Navigation />

      {/* Main content sections */}
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
