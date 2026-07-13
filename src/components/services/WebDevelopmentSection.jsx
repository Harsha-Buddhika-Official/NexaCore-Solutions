import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Container from "../common/Container";
import ServiceHighlightCard from "./ServiceHighlightCard";
import { webDevelopment } from "../../data/servicesPageData";

const WebDevelopmentSection = () => {
  const { index, icon: Icon, iconColor, title, description, checklist, technologies, highlights } =
    webDevelopment;

  const [fullWidthCard, ...restCards] = highlights;

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <span className="font-mono text-xs font-semibold tracking-wider text-cyan-400">
          {index} / SERVICE
        </span>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="flex items-center gap-3">
              <Icon className={iconColor} fontSize="large" />
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                {title}
              </h2>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-slate-400 sm:text-base">
              {description}
            </p>

            <ul className="mt-6 space-y-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircleIcon
                    fontSize="small"
                    className="mt-0.5 shrink-0 text-emerald-400"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Technologies
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
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

          <div className="flex flex-col gap-6">
            <ServiceHighlightCard highlight={fullWidthCard} />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {restCards.map((highlight) => (
                <ServiceHighlightCard key={highlight.title} highlight={highlight} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WebDevelopmentSection;