const ValueCard = ({ value }) => {
  const { icon: Icon, iconColor, iconBg, title, description } = value;

  return (
    <div className="group rounded-2xl border border-slate-700/60 bg-base-900/40 p-6 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#00F3FF]/50 hover:shadow-[0_0_30px_-6px_#00F3FF]">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconBg} ${iconColor} transition-transform duration-300 ease-in-out group-hover:scale-110`}
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

export default ValueCard;