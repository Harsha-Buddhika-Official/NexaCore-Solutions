import Container from "../common/Container";
import PhilosophyItem from "./PhilosophyItem";
import DeploymentTerminal from "./DeploymentTerminal";
import { philosophy } from "../../data/aboutPageData";

const PhilosophySection = () => {
  const { title, items, terminal } = philosophy;

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>

        <div className="grid grid-cols-1 gap-10 mt-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            {items.map((item) => (
              <PhilosophyItem key={item.number} item={item} />
            ))}
          </div>

          <DeploymentTerminal terminal={terminal} />
        </div>
      </Container>
    </section>
  );
};

export default PhilosophySection;