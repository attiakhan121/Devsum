import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import FormContainer from "./AuthFormContainer";
import WelcomeMessage from "./WelcomeMessage";
import AuthSpans from "./AuthSpans";
import PropTypes from "prop-types";

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
      <section className="relative w-full max-w-[750px] md:h-[470px] border-2 border-accent shadow-[0_0_25px_#f97316] hover:shadow-[0_0_35px_#ea580c] transition-shadow duration-300 overflow-hidden bg-transparent">

        {/* Background Spans Layer */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <AuthSpans
            showRegister={showRegister}
            isTransitioning={isTransitioning}
            setIsTransitioning={setIsTransitioning}
          />
        </div>

        {/* === DESKTOP === */}
        <div className="hidden md:block relative w-full h-[470px] z-30">
          <AnimatePresence mode="wait">
            {!isTransitioning && (
              <>
                <FormContainer
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

        {/* === MOBILE === */}
        <div className="block md:hidden w-full h-[600px] px-4 pt-6 relative z-30">
          <AnimatePresence mode="wait">
            {!isTransitioning && (
              <>
                <WelcomeMessage
                  key={`msg-mobile-${formResetKey}`}
                  type={currentType}
                  variant="mobile"
                />
                <div className="w-full flex justify-center">
                  <FormContainer
                    key={`form-mobile-${formResetKey}`}
                    type={currentType}
                    variant="mobile"
                    direction={currentDirection}
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

AuthWrapper.propTypes = {
  initialType: PropTypes.oneOf(["login", "register"]),
};

export default AuthWrapper;