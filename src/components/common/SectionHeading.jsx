const SectionHeading = ({ title, subtitle, align = "center" }) => {
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignment} mb-12`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-white">{title}</h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-slate-400 text-base sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;