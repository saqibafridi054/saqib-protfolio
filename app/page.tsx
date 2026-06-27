import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import HeroSection from "@/app/components/sections/HeroSection";
import AboutSection from "@/app/components/sections/AboutSection";
import SkillsSection from "@/app/components/sections/SkillsSection";
import ServicesSection from "@/app/components/sections/ServicesSection";
import ProjectsSection from "@/app/components/sections/ProjectsSection";
import ExperienceSection from "@/app/components/sections/ExperienceSection";
import TestimonialsSection from "@/app/components/sections/TestimonialsSection";
import ContactSection from "@/app/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
