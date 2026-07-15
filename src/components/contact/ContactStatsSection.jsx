import Container from "../common/Container";
import CountUpNumber from "../common/CountUpNumber";
import { contactStats } from "../../data/contactPageData";

const ContactStatsSection = () => {
  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {contactStats.map((stat) => (
            <div key={stat.label}>
              <CountUpNumber
                value={stat.value}
                className={`text-4xl font-extrabold sm:text-5xl ${stat.color}`}
              />
              <p className="mt-2 font-mono text-xs font-medium tracking-wide uppercase text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ContactStatsSection;