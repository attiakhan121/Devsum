import { motion } from "framer-motion";
import WelcomeMessage from "./WelcomeMessage";

const AuthSpans = ({ showRegister, isTransitioning, setIsTransitioning }) => {
  const type = showRegister ? "register" : "login";
  const firstSpanDelay = isTransitioning ? (showRegister ? 0 : 0.6) : 0;
  const secondSpanDelay = isTransitioning ? (showRegister ? 0.6 : 0) : 0;

  return (
    <>
      {/* ===== DESKTOP SPANS ===== */}
      <motion.span
        initial={false}
        animate={{
          rotate: showRegister ? 0 : 10,
          skewY: showRegister ? 0 : 40,
        }}
        transition={{
          duration: 0.8,
          delay: firstSpanDelay,
          ease: "easeInOut",
        }}
        className="hidden md:block absolute top-[-4px] right-0 w-[1200px] h-[850px] 
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
          delay: secondSpanDelay,
          ease: "easeInOut",
        }}
        onAnimationComplete={() => setIsTransitioning(false)}
        className="hidden md:block absolute top-full left-[350px] w-[1900px] h-[900px] 
                   bg-[#002140] border-t-[3px] border-accent origin-bottom-left z-10"
      />

      {/* ===== MOBILE SPAN ===== */}
      <motion.div
        initial={false}
        animate={{
          top: showRegister ? "auto" : "0",
          bottom: showRegister ? "0" : "auto",
          borderTopLeftRadius: showRegister ? "1.5rem" : "0rem",
          borderTopRightRadius: showRegister ? "1.5rem" : "0rem",
          borderBottomLeftRadius: showRegister ? "0rem" : "1.5rem",
          borderBottomRightRadius: showRegister ? "0rem" : "1.5rem",
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="absolute w-full h-[20vh] md:hidden 
                   bg-gradient-to-r from-orange-400 to-orange-600 
                   z-10 flex items-center justify-center px-4 text-center"
      >
        <WelcomeMessage type={type} variant="mobile" />
      </motion.div>
    </>
  );
};

export default AuthSpans;