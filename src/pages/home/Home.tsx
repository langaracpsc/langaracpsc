import AboutSection from "@/components/home/AboutSection";
import Divider from "@/components/Divider";
import EventsSection from "@/components/home/EventsSection";
import HeroSection from "@/components/home/HeroSection";
import ResourcesSection from "@/components/home/ResourcesSection";
import  TestimonialsSection  from '@/components/home/TestimonialsSection';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* About Us Section */}
      <AboutSection />

      {/* Divider */}
      <Divider />

      {/* Events Section */}
      <EventsSection />

      {/* Divider */}
      <Divider />

      {/* Resources Section */}
      <ResourcesSection />

      {/* Divider */}
      <Divider />

      {/* Testimonials Section */}
      <TestimonialsSection />

  
    </div>
  );
};

export default Home;
