import Container from "../common/Container";
import EnterpriseFeatureCard from "./EnterpriseFeatureCard";
import { enterpriseSoftware } from "../../data/servicesPageData";

const EnterpriseSoftwareSection = () => {
  const { index, title, features } = enterpriseSoftware;

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <span className="font-mono text-xs font-semibold tracking-wider text-cyan-400">
          {index} / SERVICE
        </span>
        <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
          {title}
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {features.map((feature) => (
            <EnterpriseFeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default EnterpriseSoftwareSection;