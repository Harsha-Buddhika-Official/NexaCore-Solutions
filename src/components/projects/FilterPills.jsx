const FilterPills = ({ options, activeFilter, onChange }) => {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => {
        const isActive = option === activeFilter;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full border px-5 py-2 font-mono text-xs font-semibold tracking-wider transition-all duration-200 ease-in-out ${
              isActive
                ? "border-indigo-500 bg-indigo-600 text-white shadow-glow"
                : "border-slate-700 bg-base-800/60 text-slate-300 hover:border-slate-600 hover:text-white"
            }`}
          >
            {option.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};

export default FilterPills;