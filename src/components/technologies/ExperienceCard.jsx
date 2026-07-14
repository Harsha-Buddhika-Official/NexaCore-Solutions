const ExperienceCard = ({ card }) => {
  const {
    iconGlyph,
    ringColor,
    glowColor,
    iconColor,
    tag,
    tagColor,
    title,
    description,
    pills,
    checklist,
  } = card;

  return (
    <div className="group flex flex-col gap-6 rounded-2xl border border-slate-700/60 bg-base-800/50 p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#00F3FF]/50 hover:shadow-[0_0_30px_-6px_#00F3FF] sm:flex-row sm:items-start">
      <div
        className={`mx-auto flex h-24 w-24 shrink-0 items-center justify-center rounded-full border ${ringColor} bg-base-900 ${glowColor} transition-transform duration-300 ease-in-out group-hover:scale-105 sm:mx-0`}
      >
        <span className={`text-3xl ${iconColor}`}>{iconGlyph}</span>
      </div>

      <div className="text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <span
            className={`rounded-full border px-3 py-1 font-mono text-[10px] font-semibold tracking-wider ${tagColor}`}
          >
            {tag}
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          {description}
        </p>

        {pills && (
          <div className="flex flex-wrap justify-center gap-2 mt-4 sm:justify-start">
            {pills.map((pill) => (
              <span
                key={pill}
                className="rounded-md border border-slate-700 bg-base-800 px-3 py-1.5 font-mono text-xs text-slate-300"
              >
                {pill}
              </span>
            ))}
          </div>
        )}

        {checklist && (
          <ul className="mt-4 flex flex-col gap-1.5">
            {checklist.map((item) => (
              <li
                key={item}
                className="flex items-center justify-center gap-2 font-mono text-xs text-slate-300 sm:justify-start"
              >
                <span className="text-emerald-400">✓</span>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;