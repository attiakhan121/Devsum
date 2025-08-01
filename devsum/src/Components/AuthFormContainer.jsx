import React from "react";
import { motion } from "framer-motion";
import AuthForm from "./AuthForm";
import { desktopSlideVariants } from "./variants";

const FormContainer = ({ type, variant, direction, onToggle, formResetKey }) => {
  const isLogin = type === "login";

  const containerClass =
    variant === "desktop"
      ? `absolute top-0 ${isLogin ? "left-0" : "right-0"} w-1/2 h-full z-30`
      : `w-full px-4 z-30 relative`;

  const motionProps =
    variant === "desktop"
      ? {
          custom: direction,
          variants: desktopSlideVariants,
          initial: "initial",
          animate: "animate",
          exit: "exit",
        }
      : {
          initial: { y: type === "login" ? -550 : 550, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: type === "login" ? 550 : -550, opacity: 0 },
          transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 },
        };

  return (
    <motion.div key={`${type}-${variant}`} {...motionProps} className={containerClass}>
      <AuthForm key={`${type}-${formResetKey}`} type={type} onToggle={onToggle} />
    </motion.div>
  );
};

export default FormContainer;