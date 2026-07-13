const Badge = ({ children, className = "" }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-emerald-400 ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;