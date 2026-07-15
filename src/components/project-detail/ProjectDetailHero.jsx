import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Container from "../common/Container";
import Button from "../common/Button";

const ProjectDetailHero = ({ project }) => {
  const {
    caseStudyNumber,
    title,
    description,
    industry,
    timeline,
    liveUrl,
    image,
    buildLabel,
  } = project;

  return (
    <section className="pb-14 pt-14 sm:pb-20 sm:pt-20">
      <Container>
        <span
          style={{
            borderColor: "var(--accent)",
            color: "var(--accent)",
            backgroundColor: "color-mix(in srgb, var(--accent) 12%, transparent)",
          }}
          className="inline-flex items-center gap-2 px-3 py-1 font-mono text-xs font-semibold tracking-wide border rounded-full"
        >
          <span
            style={{ backgroundColor: "var(--accent)" }}
            className="h-1.5 w-1.5 rounded-full"
          />
          CASE STUDY: {caseStudyNumber}
        </span>

        <div className="grid grid-cols-1 gap-10 mt-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="mt-6 text-sm leading-relaxed text-slate-400 sm:text-base">
              {description}
            </p>

            <div className="flex flex-wrap gap-8 mt-8">
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  Industry
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  {industry}
                </p>
              </div>
              <div className="pl-8 border-l border-slate-700">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                  Timeline
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  {timeline}
                </p>
              </div>
            </div>

            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="gap-2 mt-8">
                  View Live Project
                  <OpenInNewIcon sx={{ fontSize: 16 }} />
                </Button>
              </a>
            )}
          </div>

          <div className="relative">
            <div
              style={{
                boxShadow: "0 0 60px -15px var(--accent)",
              }}
              className="overflow-hidden border rounded-2xl border-slate-700/60 bg-base-800"
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700/60 bg-base-700/50">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>

              <div className="relative">
                <img
                  src={image}
                  alt={title}
                  className="object-cover w-full h-64 sm:h-80"
                />
                {buildLabel && (
                  <span
                    style={{ backgroundColor: "var(--accent)" }}
                    className="absolute bottom-4 left-4 rounded-md px-3 py-1.5 font-mono text-[11px] font-semibold text-base-950"
                  >
                    {buildLabel}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectDetailHero;