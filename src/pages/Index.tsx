import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TrendsSection from "@/components/TrendsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      {/* <TestimonialsSection /> */}
      <WhyChooseUsSection />
      {/* <TrendsSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
