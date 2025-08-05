import { useEffect, useState } from "react";

export default function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed right-8 bottom-8 z-99">
      {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="bg-accent hover:shadow-lg flex h-10 w-10 cursor-pointer items-center justify-center rounded-md text-white shadow-md transition duration-300 ease-in-out"
        >
          <span className="mt-2 h-3 w-3 rotate-45 border-t border-l border-white"></span>
        </div>
      )}
    </div>
  );
}
