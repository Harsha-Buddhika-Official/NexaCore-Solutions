import { stats } from "../../data/stats";
import Container from "../common/Container";
import CountUpNumber from "../common/CountUpNumber";

const StatsBar = () => {
  return (
    <section className="pb-16">
      <Container>
        <div className="grid grid-cols-2 gap-6 p-8 border rounded-2xl border-slate-700/60 bg-base-800/60 sm:grid-cols-4 sm:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <CountUpNumber
                value={stat.value}
                className={`text-3xl font-bold sm:text-4xl ${stat.color}`}
              />
              <p className="mt-1 text-xs font-medium tracking-wide uppercase text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsBar;