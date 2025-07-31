
export const Direction = {
  LEFT: "left",
  RIGHT: "right",
};

export const desktopSlideVariants = {
  initial: (direction) => ({
    x: direction === Direction.LEFT ? 100 : -100,
    opacity: 0,
    filter: "blur(5px)",
  }),
  animate: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeInOut" },
  },
  exit: (direction) => ({
    x: direction === Direction.LEFT ? -100 : 100,
    opacity: 0,
    filter: "blur(5px)",
    transition: { duration: 0.8, ease: "easeInOut" },
  }),
};

// Mobile slide/fade variant
export const mobileSlideVariants = {
  initial: (type) => ({
    y: type === "login" ? -100 : 100,
    opacity: 0,
    filter: "blur(5px)",
  }),
  animate: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 },
  },
  exit: (type) => ({
    y: type === "login" ? 100 : -100,
    opacity: 0,
    filter: "blur(5px)",
    transition: { duration: 0.8, ease: "easeInOut" },
  }),
};