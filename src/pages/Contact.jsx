import Container from "../components/common/Container";
import ContactHero from "../components/contact/ContactHero";
import ContactInfoCard from "../components/contact/ContactInfoCard";
import MapCard from "../components/contact/MapCard";
import SocialLinksBar from "../components/contact/SocialLinksBar";
import QuoteForm from "../components/contact/QuoteForm";
import ContactStatsSection from "../components/contact/ContactStatsSection";

const Contact = () => {
  return (
    <>
      <ContactHero />

      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <ContactInfoCard />
              <MapCard />
              <SocialLinksBar />
            </div>

            <QuoteForm />
          </div>
        </Container>
      </section>

      <ContactStatsSection />
    </>
  );
};

export default Contact;