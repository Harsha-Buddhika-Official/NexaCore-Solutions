import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ValueCard from "./ValueCard";
import { coreValues } from "../../data/aboutPageData";

const CoreValuesSection = () => {
  const { title, subtitle, values } = coreValues;

  return (
    <section className="py-16 border-y border-white/5 bg-[#151C29] sm:py-20">
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {values.map((value) => (
            <ValueCard key={value.title} value={value} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CoreValuesSection;