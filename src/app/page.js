import AboutSection from "./components/landing/AboutSection";
import FinalCta from "./components/landing/FinalCta";
import Footer from "./components/landing/Footer";
import HeroSection from "./components/landing/HeroSection";
import Navbar from "./components/landing/Navbar";
import ProjectsSection from "./components/landing/ProjectsSection";
import SolutionsSection from "./components/landing/SolutionsSection";

export default function Home() {
  return (
    <div className="tech-grid-background min-h-screen bg-black text-[#f2f4f6]">
      <Navbar />
      <main>
        <HeroSection />
        <SolutionsSection />
        <ProjectsSection />
        <AboutSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
