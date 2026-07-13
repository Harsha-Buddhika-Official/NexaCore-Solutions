import Hero from "../components/home/Hero";
import StatsBar from "../components/home/StatsBar";
import ServicesSection from "../components/home/ServicesSection";
import TechStackSection from "../components/home/TechStackSection";
import FeaturedProjects from "../components/home/FeaturedProjects";
import ProcessSection from "../components/home/ProcessSection";
import WhyChooseSection from "../components/home/WhyChooseSection";
import CTASection from "../components/home/CTASection";

const Home = () => {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesSection />
      <TechStackSection />
      <FeaturedProjects />
      <ProcessSection />
      <WhyChooseSection />
      <CTASection />
    </>
  );
};

export default Home;