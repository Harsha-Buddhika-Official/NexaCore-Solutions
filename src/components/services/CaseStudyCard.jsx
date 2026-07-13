const CaseStudyCard = ({ caseStudy }) => {
  const { title, category, image } = caseStudy;

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-700/60 bg-base-800/50 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-[#00F3FF]/50 hover:shadow-[0_0_30px_-6px_#00F3FF]">
      <div className="relative h-48 overflow-hidden bg-base-700">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold text-white">{title}</h3>
        <p className="mt-1 font-mono text-xs text-slate-500">{category}</p>
      </div>
    </div>
  );
};

export default CaseStudyCard;