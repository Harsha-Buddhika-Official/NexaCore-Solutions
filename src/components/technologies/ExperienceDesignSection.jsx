import Container from "../common/Container";
import ExperienceCard from "./ExperienceCard";
import { experienceDesign } from "../../data/technologiesPageData";

const ExperienceDesignSection = () => {
  const { icon: Icon, title, cards } = experienceDesign;

  return (
    <section className="py-10">
      <Container>
        <div className="flex items-center gap-3">
          <Icon className="text-cyan-400" fontSize="medium" />
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-2">
          {cards.map((card) => (
            <ExperienceCard key={card.id} card={card} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ExperienceDesignSection;