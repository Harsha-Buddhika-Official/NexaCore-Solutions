import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import FeatureCard from "./FeatureCard";
import { features } from "../../data/features";

const WhyChooseSection = () => {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Why Choose NexaCore?"
          subtitle="We don't just build software; we engineer future-proof digital assets."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseSection;