import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import ProcessStep from "./ProcessStep";
import { processSteps, secondaryProcessSteps } from "../../data/processSteps";

const ProcessSection = () => {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading title="Our Development Process" />

        <div className="relative flex flex-wrap justify-between gap-y-10 sm:flex-nowrap">
          {/* Connecting line, runs through the center of every circle */}
          <div className="pointer-events-none absolute left-7 right-7 top-7 h-px bg-gradient-to-r from-cyan-400/10 via-cyan-400/60 to-cyan-400/10" />

          {processSteps.map((step) => (
            <div key={step.number} className="flex w-1/2 justify-center sm:w-auto sm:flex-1">
              <ProcessStep step={step} variant="numbered" />
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {secondaryProcessSteps.map((step) => (
            <ProcessStep key={step.title} step={step} variant="icon" />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProcessSection;