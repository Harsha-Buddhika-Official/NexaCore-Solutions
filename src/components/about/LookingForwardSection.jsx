import Container from "../common/Container";
import RoadmapCard from "./RoadmapCard";
import { lookingForward } from "../../data/aboutPageData";

const LookingForwardSection = () => {
  const { title, cards } = lookingForward;

  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <h2 className="text-2xl font-bold text-center text-white sm:text-3xl">
          {title}
        </h2>

        <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2">
          {cards.map((card) => (
            <RoadmapCard key={card.id} card={card} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LookingForwardSection;