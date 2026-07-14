const TechCard = ({ card }) => {
  const { icon: Icon, badgeText, badgeStyle, iconColor, tag, tagColor, title, description, benefit, benefitColor } =
    card;

  return (
    <div className="group flex flex-col rounded-2xl border border-slate-700/60 bg-base-800/50 p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#00F3FF]/50 hover:shadow-[0_0_30px_-6px_#00F3FF]">
      <div className="flex items-center justify-between">
        {Icon ? (
          <Icon className={iconColor} fontSize="medium" />
        ) : (
          <span
            className={`font-mono text-sm font-bold ${
              badgeStyle === "emoji" ? "text-xl" : "text-slate-300"
            }`}
          >
            {badgeText}
          </span>
        )}
        <span
          className={`rounded-full border px-3 py-1 font-mono text-[10px] font-semibold tracking-wider ${tagColor}`}
        >
          {tag}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
      <p className="flex-1 mt-2 text-sm leading-relaxed text-slate-400">
        {description}
      </p>

      <div className="pt-4 mt-5 border-t border-slate-700/60">
        <p className="font-mono text-[10px] font-semibold tracking-wider text-slate-500">
          BENEFIT
        </p>
        <p className={`mt-1 text-sm leading-relaxed ${benefitColor}`}>
          {benefit}
        </p>
      </div>
    </div>
  );
};

export default TechCard;