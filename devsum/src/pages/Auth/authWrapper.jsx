import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

import AuthFormContainer from "./AuthFormContainer";
import WelcomeMessage from "./WelcomeMessage";
import AuthSpans from "./AuthSpans";

const AuthWrapper = ({ initialType = "login" }) => {
  const [showRegister, setShowRegister] = useState(initialType === "register");
  const [formResetKey, setFormResetKey] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleToggle = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setShowRegister((prev) => !prev);
    setFormResetKey((prev) => prev + 1);
  };

  useEffect(() => {
    setShowRegister(initialType === "register");
  }, [initialType]);

  const currentType = showRegister ? "register" : "login";
  const currentDirection = showRegister ? "right" : "left";

  return (
    <main className="min-h-screen flex items-center justify-center px-2">
      <section className="relative w-full max-w-[1000px] min-h-[700px] md:min-h-0 py-20 border-2 border-accent shadow-[0_0_25px_#f97316] hover:shadow-[0_0_35px_#ea580c] transition-shadow duration-300 overflow-hidden bg-transparent">

        {/* Background Animation Layer */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <AuthSpans
            showRegister={showRegister}
            isTransitioning={isTransitioning}
            setIsTransitioning={setIsTransitioning}
          />
        </div>

        {/* ===== DESKTOP VERSION ===== */}
        <div className="hidden md:block relative w-full h-[470px] z-30">
          <AnimatePresence mode="wait">
            {!isTransitioning && (
              <>
                <AuthFormContainer
                  key={`form-desktop-${formResetKey}`}
                  type={currentType}
                  variant="desktop"
                  direction={currentDirection}
                  onToggle={handleToggle}
                  formResetKey={formResetKey}
                />
                <WelcomeMessage
                  key={`msg-desktop-${formResetKey}`}
                  type={currentType}
                  variant="desktop"
                />
              </>
            )}
          </AnimatePresence>
        </div>

        {/* ===== MOBILE VERSION ===== */}
        <AnimatePresence mode="sync">
          <motion.div
            key={`form-mobile-${formResetKey}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`md:hidden absolute left-0 w-full z-30 flex justify-center px-4 ${
              showRegister ? "top-10" : "top-[30vh]"
            }`}
          >
            <AuthFormContainer
              type={currentType}
              variant="mobile"
              direction={currentDirection}
              onToggle={handleToggle}
              formResetKey={formResetKey}
            />
          </motion.div>
        </AnimatePresence>
      </section>
    </main>
  );
};

AuthWrapper.propTypes = {
  initialType: PropTypes.oneOf(["login", "register"]),
};

export default AuthWrapper;