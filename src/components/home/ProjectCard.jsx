import { Link } from "react-router-dom";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const ProjectCard = ({ project }) => {
  const { id, category, title, description, tags, image, liveUrl } = project;

  return (
    <Link
      to={`/projects/${id}`}
      className="group block overflow-hidden rounded-2xl border border-slate-700/60 bg-base-800/50 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#00F3FF]/50 hover:shadow-[0_0_35px_-6px_#00F3FF]"
    >
      <div className="relative h-56 overflow-hidden bg-base-700 sm:h-64">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-semibold tracking-wider text-cyan-400">
            {category}
          </span>

          {liveUrl && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                window.open(liveUrl, "_blank", "noopener,noreferrer");
              }}
              aria-label={`Visit ${title} live site`}
              className="flex items-center gap-1.5 rounded-full border border-slate-700 px-3 py-1.5 text-xs font-medium text-slate-400 transition-colors duration-300 hover:border-cyan-400/50 hover:text-cyan-400"
            >
              Visit Site
              <OpenInNewIcon sx={{ fontSize: 14 }} />
            </button>
          )}
        </div>

        <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-slate-700 bg-base-800 px-2.5 py-1 text-xs text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;