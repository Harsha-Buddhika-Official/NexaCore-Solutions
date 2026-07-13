import Container from "../common/Container";
import ServiceHighlightCard from "./ServiceHighlightCard";
import { mobileApps } from "../../data/servicesPageData";

const MobileAppsSection = () => {
  const { index, icon: Icon, iconColor, title, description, technologies, highlights } =
    mobileApps;

  return (
    <section className="border-y border-white/5 bg-base-800/30 py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 flex justify-center lg:order-1">
            <div className="flex h-56 w-40 items-center justify-center rounded-3xl border border-slate-700/60 bg-base-800/60 shadow-[0_0_60px_-15px_rgba(52,211,153,0.35)] sm:h-64 sm:w-48">
              <Icon className={iconColor} sx={{ fontSize: 56 }} />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="font-mono text-xs font-semibold tracking-wider text-emerald-400">
              {index} / SERVICE
            </span>

            <div className="mt-4 flex items-center gap-3">
              <Icon className={iconColor} fontSize="large" />
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                {title}
              </h2>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-slate-400 sm:text-base">
              {description}
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {highlights.map((highlight) => (
                <ServiceHighlightCard key={highlight.title} highlight={highlight} />
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-slate-700 bg-base-800 px-3 py-1.5 font-mono text-xs text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MobileAppsSection;