import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FormContainer from "../Components/AuthFormContainer";
import WelcomeMessage from "../Components/WelcomeMessage";

const Auth = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [formResetKey, setFormResetKey] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setShowRegister(false);
  }, []);

  const handleToggle = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setShowRegister((prev) => !prev);
    setFormResetKey((prev) => prev + 1);
  };

  return (
    <main className="min-h-screen bg-[#002147] flex items-center justify-center px-2">
      <section
    className="
    relative w-full max-w-[750px] h-auto md:h-[470px] border-2 border-orange-500 
    shadow-[0_0_25px_#f97316] hover:shadow-[0_0_35px_#ea580c] transition-shadow duration-300 
    overflow-hidden bg-transparent">

        {/* === SHARED ANIMATED SPANS === */}
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
             bg-[linear-gradient(45deg,#fca96a,#ea580c)] border-b-[3px] border-orange-500 
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
                     bg-[#002140] border-t-[3px] border-orange-500  origin-bottom-left z-10"
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
             md:hidden bg-[linear-gradient(45deg,#fca96a,#ea580c)] border-b-[2px] border-orange-500 
             origin-bottom-right z-0"
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
                     md:hidden bg-[#002140] border-t-[2px] border-orange-500  origin-bottom-left z-0"
        />

        {/* === DESKTOP VIEW === */}
        <div className="hidden md:block relative w-full h-[470px]">
          <AnimatePresence mode="wait">
            {!isTransitioning && (
              <>
                <FormContainer
                  key={`form-desktop-${formResetKey}`}
                  type={showRegister ? "register" : "login"}
                  variant="desktop"
                  direction={showRegister ? "right" : "left"}
                  onToggle={handleToggle}
                  formResetKey={formResetKey}
                />

                <WelcomeMessage
                  key={`msg-desktop-${formResetKey}`}
                  type={showRegister ? "register" : "login"}
                  variant="desktop"
                />
              </>
            )}
          </AnimatePresence>
        </div>

        {/* === MOBILE VIEW === */}
        <div className="block md:hidden w-full h-[600px] px-4 relative overflow-hidden pt-6 flex-col justify-center items-center">
          <AnimatePresence mode="wait">
            {!isTransitioning && (
              <>
                <WelcomeMessage
                  key={`msg-mobile-${formResetKey}`}
                  type={showRegister ? "register" : "login"}
                  variant="mobile"
                />

                <div className="w-full relative z-30 overflow-hidden flex justify-center">
                  <FormContainer
                    key={`form-mobile-${formResetKey}`}
                    type={showRegister ? "register" : "login"}
                    variant="mobile"
                    direction={showRegister ? "right" : "left"}
                    onToggle={handleToggle}
                    formResetKey={formResetKey}
                  />
                </div>
              </>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
};

export default Auth;