const ServiceHighlightCard = ({ highlight, className = "" }) => {
  const { icon: Icon, iconColor, title, description } = highlight;

  return (
    <div
      className={`group rounded-2xl border border-slate-700/60 bg-base-800/50 p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#00F3FF]/50 hover:shadow-[0_0_30px_-6px_#00F3FF] ${className}`}
    >
      <Icon
        className={`${iconColor} transition-transform duration-300 ease-in-out group-hover:scale-110`}
        fontSize="medium"
      />
      <h4 className="mt-4 text-base font-semibold text-white">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">
        {description}
      </p>
    </div>
  );
};

export default ServiceHighlightCard;