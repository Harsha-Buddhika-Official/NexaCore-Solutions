import Container from "../common/Container";
import Button from "../common/Button";
import { techStack } from "../../data/techStack";

const TechStackSection = () => {
  return (
    <section className="border-y border-white/5 bg-base-800/40 py-16">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Our Technology Stack
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-400 sm:text-base">
              We use the most reliable and efficient technologies to ensure
              your project is built for the future.
            </p>
          </div>
          <Button
            as="a"
            href="/technologies"
            variant="secondary"
            className="shrink-0"
          >
            View Full Technology Stack
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {techStack.map((tech) => (
            <span
              key={tech.name}
              className="flex items-center gap-2 rounded-full border border-slate-700 bg-base-800 px-4 py-2 text-sm text-slate-300"
            >
              <span className={`h-2 w-2 rounded-full ${tech.color}`} />
              {tech.name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TechStackSection;