import Container from "../common/Container";
import { heroPills } from "../../data/servicesPageData";

const ServicesHero = () => {
  return (
    <section className="pb-14 pt-14 sm:pb-20 sm:pt-20">
      <Container>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Engineering the Future
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-base text-slate-400 sm:text-lg">
          Comprehensive software solutions tailored for high-performance
          engineering, scalable cloud infrastructure, and seamless digital
          experiences.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {heroPills.map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-slate-700 bg-base-800/60 px-4 py-2 font-mono text-xs text-slate-300"
            >
              {pill}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesHero;