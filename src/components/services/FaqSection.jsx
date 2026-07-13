import Container from "../common/Container";
import FaqItem from "./FaqItem";
import { faqs } from "../../data/servicesPageData";

const FaqSection = () => {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-8 flex max-w-2xl flex-col gap-4">
          {faqs.map((faq) => (
            <FaqItem key={faq.id} faq={faq} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;