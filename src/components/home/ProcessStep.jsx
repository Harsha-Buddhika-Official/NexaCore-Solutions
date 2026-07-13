const ProcessStep = ({ step, variant = "numbered" }) => {
  const { icon: Icon, title, description, number, color, text, iconColor, glow } = step;

  if (variant === "numbered") {
    return (
      <div className="relative z-10 flex flex-col items-center text-center">
        <div
          style={{ "--ring": color }}
          className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[var(--ring)] bg-base-900 shadow-[0_0_20px_-6px_var(--ring)] transition-transform duration-300 ease-in-out hover:scale-110"
        >
          <span className={`font-mono text-lg font-bold ${text}`}>
            {number}
          </span>
        </div>
        <h4 className="mt-5 text-base font-semibold text-white">{title}</h4>
        <p className="mt-1 max-w-[200px] text-sm text-slate-400">
          {description}
        </p>
      </div>
    );
  }

  return (
    <div
      style={{ "--glow": glow }}
      className="flex flex-col items-center text-center sm:items-start sm:text-left"
    >
      <Icon
        className={`${iconColor} transition-transform duration-300 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_10px_var(--glow)]`}
        fontSize="medium"
      />
      <h4 className="mt-3 text-base font-semibold text-white">{title}</h4>
      <p className="mt-1 max-w-[240px] text-sm text-slate-400">
        {description}
      </p>
    </div>
  );
};

export default ProcessStep;