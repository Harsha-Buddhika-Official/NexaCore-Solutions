import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PublicIcon from "@mui/icons-material/Public";

const MAX_VISIBLE_TAGS = 3;

const ProjectCard = ({ project }) => {
  const {
    slug,
    category,
    country,
    accentColor,
    image,
    headlineStat,
    headlineLabel,
    title,
    description,
    stats,
    tags,
  } = project;

  const visibleTags = tags.slice(0, MAX_VISIBLE_TAGS);
  const hiddenTagCount = tags.length - visibleTags.length;

  return (
    <div
      style={{ "--accent": accentColor }}
      className="group relative overflow-hidden rounded-2xl border border-slate-700/60 bg-base-800/50 shadow-[0_0_25px_-12px_var(--accent)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[var(--accent)]/60 hover:shadow-[0_0_40px_-8px_var(--accent)]"
    >
      {/* Top accent bar */}
      <div
        style={{ backgroundColor: "var(--accent)" }}
        className="absolute inset-x-0 top-0 z-10 h-1"
      />

      {/* Image banner */}
      <div className="relative h-40 overflow-hidden bg-base-700 sm:h-44">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base-800 via-transparent to-transparent" />

        <span
          style={{ backgroundColor: "var(--accent)" }}
          className="absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-base-950"
        >
          {category}
        </span>

        {country && (
          <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-base-900/70 px-3 py-1 text-[11px] text-slate-300 backdrop-blur-sm">
            <PublicIcon sx={{ fontSize: 13 }} />
            {country}
          </span>
        )}
      </div>

      <div className="p-6">
        <p
          style={{ color: "var(--accent)" }}
          className="text-3xl font-extrabold leading-tight sm:text-4xl"
        >
          {headlineStat}
        </p>
        <p className="mt-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-slate-500">
          {headlineLabel}
        </p>

        <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-4 pt-5 mt-5 border-t border-slate-700/60">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-lg font-bold text-white">{stat.value}</p>
              <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-5">
          {visibleTags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-slate-700 bg-base-800 px-2.5 py-1 text-xs text-slate-400"
            >
              {tag}
            </span>
          ))}
          {hiddenTagCount > 0 && (
            <span className="rounded-md border border-slate-700 bg-base-800 px-2.5 py-1 text-xs text-slate-500">
              +{hiddenTagCount}
            </span>
          )}
        </div>

        <Link
          to={`/projects/${slug}`}
          style={{ color: "var(--accent)" }}
          className="group/link mt-6 inline-flex items-center gap-1.5 text-sm font-semibold"
        >
          Read case study
          <ArrowForwardIcon
            sx={{ fontSize: 16 }}
            className="transition-transform duration-200 ease-in-out group-hover/link:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;