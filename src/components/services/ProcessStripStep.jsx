const ProcessStripStep = ({ step }) => {
  const { number, title, description } = step;

  return (
    <div className="relative z-10 flex flex-col items-center text-center sm:items-start sm:text-left">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-indigo-400 bg-base-900 shadow-[0_0_18px_-6px_#818cf8] transition-transform duration-300 ease-in-out hover:scale-110">
        <span className="font-mono text-sm font-bold text-indigo-300">
          {number}
        </span>
      </div>
      <h4 className="mt-4 text-base font-semibold text-white">{title}</h4>
      <p className="mt-1 max-w-[220px] text-sm text-slate-400">
        {description}
      </p>
    </div>
  );
};

export default ProcessStripStep;