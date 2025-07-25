const Button = ({
  children,
  variant = "primary",
  size = "default",
  disabled = false,
  className = "",
  ...props
}) => {
  const baseClass =
    "rounded-full font-medium transition-all duration-300 focus:outline-none inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:pointer-events-none";

  const variants = {
    primary: "bg-accent text-white hover:bg-[#ff9900]",
    secondary: "bg-[#fff4e5] text-accent hover:bg-[#ffe1c2]",
    outline: "border border-[#ffddb4] text-accent hover:bg-[#fff4e5]",
    ghost: "text-accent hover:bg-[#fff7eb]",
  };

  const disabledVariants = {
    primary: "bg-[#ffddb4] text-[#fff7eb]",
    secondary: "bg-[#fff7eb] text-[#ffddb4]",
    outline: "border border-[#ffddb4] text-[#ffddb4]",
    ghost: "text-[#ffddb4]",
  };

  const sizes = {
    default: "h-9 px-4 py-2 has-[>svg]:px-3",
    sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
    lg: "h-13 px-6 has-[>svg]:px-4",
    icon: "size-9",
  };

  return (
    <button
      className={`${baseClass} ${
        disabled ? disabledVariants[variant] : variants[variant]
      } ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
