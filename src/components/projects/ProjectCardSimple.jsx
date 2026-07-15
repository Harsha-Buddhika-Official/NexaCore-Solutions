import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ProjectCardSimple = ({ project }) => {
  const { image, title, description, bullets, tags, accentColor } = project;

  return (
    <div
      style={{ "--accent": accentColor }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-700/60 bg-base-800/50 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[var(--accent)]/50 hover:shadow-[0_0_35px_-6px_var(--accent)]"
    >
      <div className="relative overflow-hidden h-72 bg-base-700 sm:h-80">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col flex-1 p-6 sm:p-8">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm text-slate-400 sm:text-base">
          {description}
        </p>

        {bullets && (
          <ul className="mt-5 flex flex-col gap-2.5">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-2 text-sm text-slate-300"
              >
                <CheckCircleIcon
                  fontSize="small"
                  style={{ color: "var(--accent)" }}
                  className="mt-0.5 shrink-0"
                />
                {bullet}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-2 pt-6 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-slate-700 bg-base-800 px-3 py-1.5 font-mono text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSimple;