import Container from "../common/Container";
import { cloudInfrastructure } from "../../data/servicesPageData";

const CloudInfrastructureSection = () => {
  const { index, icon: Icon, title, description, image, stat, points } =
    cloudInfrastructure;

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="font-mono text-xs font-semibold tracking-wider text-cyan-400">
              {index} / SERVICE
            </span>

            <div className="mt-4 flex items-center gap-3">
              <Icon className="text-cyan-400" fontSize="large" />
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                {title}
              </h2>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-slate-400 sm:text-base">
              {description}
            </p>

            <div className="mt-8 flex flex-col gap-6">
              {points.map((point) => (
                <div
                  key={point.title}
                  className={`border-l-2 pl-4 ${point.accent}`}
                >
                  <h4 className="text-sm font-semibold text-white sm:text-base">
                    {point.title}
                  </h4>
                  <p className="mt-1 text-sm text-slate-400">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-slate-700/60 bg-base-800">
              <img
                src={image}
                alt={title}
                className="h-72 w-full object-cover sm:h-96"
              />
            </div>

            <div className="absolute bottom-4 right-4 rounded-xl border border-slate-700/60 bg-base-900/90 px-4 py-3 backdrop-blur-sm">
              <p className="text-lg font-bold text-emerald-400">
                {stat.value}
              </p>
              <p className="font-mono text-[10px] tracking-wider text-slate-400">
                {stat.label}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CloudInfrastructureSection;