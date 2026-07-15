const FeatureCard = ({ feature }) => {
  const { icon: Icon, title, description } = feature;

  return (
    <div className="group rounded-2xl border border-slate-700/60 bg-base-800/50 p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[var(--accent)]/50 hover:shadow-[0_0_30px_-8px_var(--accent)] sm:p-8">
      <div
        style={{
          color: "var(--accent)",
          backgroundColor: "color-mix(in srgb, var(--accent) 12%, transparent)",
        }}
        className="flex items-center justify-center transition-transform duration-300 ease-in-out h-11 w-11 rounded-xl group-hover:scale-110"
      >
        <Icon fontSize="small" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;