import TechnologiesHero from "../components/technologies/TechnologiesHero";
import TechCategorySection from "../components/technologies/TechCategorySection";
import ExperienceDesignSection from "../components/technologies/ExperienceDesignSection";
import TechStatsSection from "../components/technologies/TechStatsSection";
import {
  frontendCategory,
  infrastructureCategory,
  mobileCategory,
} from "../data/technologiesPageData";

const Technologies = () => {
  return (
    <>
      <TechnologiesHero />
      <TechCategorySection category={frontendCategory} />
      <TechCategorySection category={mobileCategory} />
      <TechCategorySection category={infrastructureCategory} />
      <ExperienceDesignSection />
      <TechStatsSection />
    </>
  );
};

export default Technologies;
