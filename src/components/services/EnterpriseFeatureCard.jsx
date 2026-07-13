const EnterpriseFeatureCard = ({ feature }) => {
  const { icon: Icon, iconColor, iconBg, title, description, bullets } = feature;

  return (
    <div className="group rounded-2xl border border-slate-700/60 bg-base-800/50 p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#00F3FF]/50 hover:shadow-[0_0_30px_-6px_#00F3FF]">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconBg} ${iconColor} transition-transform duration-300 ease-in-out group-hover:scale-110`}
      >
        <Icon fontSize="small" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">
        {description}
      </p>
      <ul className="mt-4 space-y-2">
        {bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex items-center gap-2 text-sm text-slate-400"
          >
            <span className={`h-1.5 w-1.5 rounded-full ${iconColor.replace("text-", "bg-")}`} />
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnterpriseFeatureCard;