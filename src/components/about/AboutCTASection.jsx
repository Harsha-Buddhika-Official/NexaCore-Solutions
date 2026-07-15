import Button from "../common/Button";
import Container from "../common/Container";
import { aboutCta } from "../../data/aboutPageData";

const AboutCTASection = () => {
  const { title, description, primaryCta, secondaryCta } = aboutCta;

  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <div className="relative px-6 py-16 overflow-hidden text-center border rounded-3xl border-slate-700/60 bg-base-800/50 sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.1),_transparent_60%)]" />

          <div className="relative">
            <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              {title}
            </h2>

            <p className="max-w-xl mx-auto mt-4 text-sm text-slate-400 sm:text-base">
              {description}
            </p>

            <div className="flex flex-col items-center justify-center gap-4 mt-8 sm:flex-row">
              <Button as="a" href={primaryCta.href} size="lg">
                {primaryCta.label}
              </Button>
              <Button as="a" href={secondaryCta.href} variant="ghost" size="lg">
                {secondaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutCTASection;