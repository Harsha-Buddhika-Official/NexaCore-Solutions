const ProjectCardDetailed = ({ project }) => {
  const { image, activeCase, title, description, problem, solution, tags } =
    project;

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-700/60 bg-base-800/50 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#00F3FF]/50 hover:shadow-[0_0_35px_-6px_#00F3FF]">
      <div className="relative overflow-hidden h-72 bg-base-700 sm:h-80">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        {activeCase && (
          <span className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-emerald-400/30 bg-base-900/80 px-3 py-1.5 font-mono text-[10px] font-semibold tracking-wider text-emerald-400 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            ACTIVE CASE
          </span>
        )}
      </div>

      <div className="p-6 sm:p-8">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm text-slate-400 sm:text-base">
          {description}
        </p>

        <div className="grid grid-cols-1 gap-6 pt-6 mt-6 border-t border-slate-700/60 sm:grid-cols-2">
          <div>
            <p className="font-mono text-[10px] font-semibold tracking-wider text-slate-500">
              THE PROBLEM
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {problem}
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] font-semibold tracking-wider text-cyan-400">
              THE SOLUTION
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {solution}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
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

export default ProjectCardDetailed;