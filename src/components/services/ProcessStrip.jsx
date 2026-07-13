import Container from "../common/Container";
import ProcessStripStep from "./ProcessStripStep";
import { processSteps } from "../../data/servicesPageData";

const ProcessStrip = () => {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="relative grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-4">
          <div className="pointer-events-none absolute left-6 right-6 top-6 hidden h-px bg-gradient-to-r from-transparent via-indigo-400/60 to-transparent sm:block" />

          {processSteps.map((step) => (
            <ProcessStripStep key={step.number} step={step} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProcessStrip;