import ServicesHero from "../components/services/ServicesHero";
import WebDevelopmentSection from "../components/services/WebDevelopmentSection";
import ProcessStrip from "../components/services/ProcessStrip";
import FaqSection from "../components/services/FaqSection";
import CaseStudiesSection from "../components/services/CaseStudiesSection";
import MobileAppsSection from "../components/services/MobileAppsSection";
import EnterpriseSoftwareSection from "../components/services/EnterpriseSoftwareSection";
import CloudInfrastructureSection from "../components/services/CloudInfrastructureSection";

const Services = () => {
  return (
    <>
      <ServicesHero />
      <WebDevelopmentSection />
      <ProcessStrip />
      <FaqSection />
      <CaseStudiesSection />
      <MobileAppsSection />
      <EnterpriseSoftwareSection />
      <CloudInfrastructureSection />
    </>
  );
};

export default Services;