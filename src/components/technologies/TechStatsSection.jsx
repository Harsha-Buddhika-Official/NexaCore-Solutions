import Container from "../common/Container";
import { techStats } from "../../data/technologiesPageData";

const TechStatsSection = () => {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 p-10 border rounded-2xl border-slate-700/60 bg-base-800/40 sm:grid-cols-3 sm:gap-6">
          {techStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)] sm:text-5xl">
                {stat.value}
              </p>
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

export default TechStatsSection;