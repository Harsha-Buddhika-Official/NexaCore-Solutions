import AboutHero from "../components/about/AboutHero";
import GenesisSection from "../components/about/GenesisSection";
import MissionVisionSection from "../components/about/MissionVisionSection";
import CoreValuesSection from "../components/about/CoreValuesSection";
import PhilosophySection from "../components/about/PhilosophySection";
import LookingForwardSection from "../components/about/LookingForwardSection";
import AboutCTASection from "../components/about/AboutCTASection";

const About = () => {
  return (
    <>
      <AboutHero />
      <GenesisSection />
      <MissionVisionSection />
      <CoreValuesSection />
      <PhilosophySection />
      <LookingForwardSection />
      <AboutCTASection />
    </>
  );
};

export default About;