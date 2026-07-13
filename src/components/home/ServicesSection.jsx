import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ServiceCard from "./ServiceCard";
import { services } from "../../data/services";

const ServicesSection = () => {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Comprehensive Engineering Services"
          subtitle="We provide end-to-end technical solutions designed to give your business a competitive edge in the modern digital landscape."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;