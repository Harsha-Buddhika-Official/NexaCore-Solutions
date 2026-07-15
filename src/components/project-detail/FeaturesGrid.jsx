import Container from "../common/Container";
import FeatureCard from "./FeatureCard";

const FeaturesGrid = ({ project }) => {
  const { features } = project;

  if (!features || features.length === 0) return null;

  return (
    <section className="pb-16 sm:pb-20">
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesGrid;