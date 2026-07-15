const RoadmapCard = ({ card }) => {
  const { badge, badgeColor, title, description, underlineColor, cardBg } =
    card;

  return (
    <div
      className={`group rounded-2xl border border-slate-700/60 ${cardBg} p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#00F3FF]/40 hover:shadow-[0_0_30px_-10px_#00F3FF] sm:p-8`}
    >
      <span
        className={`font-mono text-xs font-semibold tracking-wider ${badgeColor}`}
      >
        {badge}
      </span>
      <h3 className="mt-3 text-xl font-bold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">
        {description}
      </p>
      <span
        className={`mt-5 block h-0.5 w-10 ${underlineColor} transition-all duration-300 ease-in-out group-hover:w-16`}
      />
    </div>
  );
};

export default RoadmapCard;