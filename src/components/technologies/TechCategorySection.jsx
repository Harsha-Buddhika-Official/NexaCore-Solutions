import Container from "../common/Container";
import TechCard from "./TechCard";

const TechCategorySection = ({ category }) => {
  const { icon: Icon, title, cards } = category;

  return (
    <section className="py-10">
      <Container>
        <div className="flex items-center gap-3">
          <Icon className="text-slate-300" fontSize="medium" />
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <TechCard key={card.id} card={card} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TechCategorySection;