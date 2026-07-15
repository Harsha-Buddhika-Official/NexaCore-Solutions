const PhilosophyItem = ({ item }) => {
  const { number, title, description } = item;

  return (
    <div className="flex gap-4">
      <span className="font-mono text-sm font-semibold text-indigo-400">
        {number}.
      </span>
      <div>
        <h4 className="text-base font-semibold text-white sm:text-lg">
          {title}
        </h4>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PhilosophyItem;