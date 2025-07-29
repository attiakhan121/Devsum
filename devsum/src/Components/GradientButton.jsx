export default function GradientButton({ children, className, ...props }) {
  return (
    <div className="relative group w-32 h-[40px] rounded-full overflow-hidden border-2 border-cyan-400 mt-1 self-start">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_bottom,#122138_0%,#1c3c6a_50%,_#122138_100%)] rounded-full" />
      <div className="absolute top-[-150%] left-[-25%] w-[200%] h-[300%] z-10 bg-[linear-gradient(to_bottom,#122138,#0285f0,_#122138)] group-hover:top-0 transition-all duration-500 rounded-full opacity-50 pointer-events-none" />
      <button
        {...props}
        className={`relative z-20 w-full h-full flex items-center justify-center text-white text-sm font-semibold ${className}`}
      >
        {children}
      </button>
    </div>
  );
}