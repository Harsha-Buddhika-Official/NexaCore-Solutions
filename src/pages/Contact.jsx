import Container from "../components/common/Container";
import ContactHero from "../components/contact/ContactHero";
import ContactSidebar from "../components/contact/ContactSidebar";
import QuoteForm from "../components/contact/QuoteForm";
import ContactStatsSection from "../components/contact/ContactStatsSection";

const Contact = () => {
  return (
    <>
      <ContactHero />

      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <QuoteForm />
            </div>
            <div className="lg:col-span-2">
              <ContactSidebar />
            </div>
          </div>
        </Container>
      </section>

      <ContactStatsSection />
    </>
  );
};

export default Contact;