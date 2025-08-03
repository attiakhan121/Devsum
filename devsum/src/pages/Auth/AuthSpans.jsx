import { motion } from "framer-motion";

const AuthSpans = ({ showRegister, isTransitioning, setIsTransitioning }) => {
  return (
    <>
      {/* Desktop */}
      <motion.span
        initial={false}
        animate={{
          rotate: showRegister ? 0 : 10,
          skewY: showRegister ? 0 : 40,
        }}
        transition={{
          duration: 0.8,
          delay: isTransitioning ? (showRegister ? 0 : 0.6) : 0,
          ease: "easeInOut",
        }}
        className="hidden md:block absolute top-[-4px] right-0 w-[850px] h-[600px] 
                   bg-[linear-gradient(45deg,#fca96a,#ea580c)] border-b-[3px] border-accent
                   origin-bottom-right z-10"
      />
      <motion.span
        initial={false}
        animate={{
          rotate: showRegister ? -11 : 0,
          skewY: showRegister ? -41 : 0,
        }}
        transition={{
          duration: 0.8,
          delay: isTransitioning ? (showRegister ? 0.6 : 0) : 0,
          ease: "easeInOut",
        }}
        onAnimationComplete={() => setIsTransitioning(false)}
        className="hidden md:block absolute top-full left-[250px] w-[850px] h-[700px] 
                   bg-[#002140] border-t-[3px] border-accent origin-bottom-left z-10"
      />

      {/* Mobile */}
      <motion.span
        initial={false}
        animate={{
          rotate: showRegister ? 0 : 10,
          skewY: showRegister ? 0 : 40,
        }}
        transition={{
          duration: 1,
          delay: showRegister ? 0 : 0.6,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute top-[2px] right-0 w-[870px] h-[600px]
                   md:hidden bg-[linear-gradient(45deg,#fca96a,#ea580c)] border-b-[2px] border-accent
                   origin-bottom-right z-10"
      />
      <motion.span
        initial={false}
        animate={{
          rotate: showRegister ? -11 : 0,
          skewY: showRegister ? -41 : 0,
          opacity: showRegister ? 1 : 0,
        }}
        transition={{
          duration: 1,
          delay: showRegister ? 0.6 : 0,
          ease: "easeInOut",
        }}
        onAnimationComplete={() => setIsTransitioning(false)}
        className="pointer-events-none absolute top-full left-[140px] w-[850px] h-[700px] 
                   md:hidden bg-[#002140]  border-t-[2px] border-accent origin-bottom-left z-10"
      />
    </>
  );
};

export default AuthSpans;