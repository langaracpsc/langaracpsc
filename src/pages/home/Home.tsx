import AboutSection from "@/components/home/AboutSection";
import Divider from "@/components/Divider";
import EventsSection from "@/components/home/EventsSection";
import HeroSection from "@/components/home/HeroSection";
import ResourcesSection from "@/components/home/ResourcesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />

      <AboutSection />

      <Divider />

      <EventsSection />

      <Divider />

      <ResourcesSection />

      <Divider />

      <TestimonialsSection />
    </div>
  );
};

export default Home;
