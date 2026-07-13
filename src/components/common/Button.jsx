const VARIANT_STYLES = {
  primary:
    "bg-indigo-600 hover:bg-indigo-500 text-white shadow-glow",
  secondary:
    "bg-base-700 hover:bg-base-600 text-slate-200 border border-slate-700",
  ghost: "text-slate-300 hover:text-white",
};

const SIZE_STYLES = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  as: Component = "button",
  ...props
}) => {
  return (
    <Component
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200 ${VARIANT_STYLES[variant]} ${SIZE_STYLES[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;