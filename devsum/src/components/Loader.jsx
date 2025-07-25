const Loader = ({ size = "medium", className = "" }) => {
  const sizes = {
    small: "h-4 w-4 border-2",
    medium: "h-6 w-6 border-3",
    large: "h-12 w-12 border-4",
  };

  return (
    <div
      className={`inline-block animate-spin rounded-full border-solid border-[#ffffff] border-r-transparent ${sizes[size]} ${className}`}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
