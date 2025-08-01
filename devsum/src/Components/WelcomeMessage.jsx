import { motion } from "framer-motion";
import LoginImage from "../assets/login-ai.png";
import SignupImage from "../assets/signup-ai.png";
import {
  Direction,
  desktopSlideVariants,
  mobileSlideVariants,
} from "./variants";

const WelcomeMessage = ({ type, variant }) => {
  const isLogin = type === "login";
  const isDesktop = variant === "desktop";
  const direction = isLogin ? Direction.RIGHT : Direction.LEFT;

  const containerClass = isDesktop
    ? `absolute ${isLogin ? "right-0" : "left-0"} top-[50px] w-1/2 h-full text-center
       flex flex-col text-white px-9 z-20`
    : `w-full text-white text-center mb-12 z-20`;

  const variants = isDesktop ? desktopSlideVariants : mobileSlideVariants;
  const custom = isDesktop ? direction : type;

  return (
    <motion.div
      key={`${type}-${variant}-msg`}
      custom={custom}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={containerClass}
    >
      {isDesktop ? (
        <>
          <h2 className="text-[40px] font-bold leading-[1.3] mb-1 uppercase">
            DevSum
          </h2>
          <h5 className="text-[22px] font-semibold leading-[1.3] mb-4 uppercase tracking-wide">
            The Sum of Innovations
          </h5>
          <p className={`text-sm leading-snug ${isLogin ? "text-right" : "text-left"}`}>
            {isLogin ? (
              <>Welcome to the Future of Development</>
            ) : (
              <>
                Create your account and explore endless possibilities with us
              </>
            )}
          </p>

          <motion.img
            src={isLogin ? LoginImage : SignupImage}
            alt={isLogin ? "Login Illustration" : "Signup Illustration"}
            className={`
              w-[80%] max-w-xs mx-auto
              ${isLogin ? "mt-5 mr-[-50px]" : "mt-3 ml-[-50px]"}
            `}
            initial={{ y: 0 }}
            animate={{ y: [0, -25, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </>
      ) : (
        <>
          <h2 className="text-[24px] font-bold leading-[1.3] mb-1 uppercase">DevSum</h2>
          <h3 className="text-[18px] font-semibold leading-[1.3] mb-3 uppercase tracking-wide">
            The Sum of Innovations
          </h3>
          <p className="text-xs leading-snug">
            {isLogin
              ? "Welcome to the Future of Development"
              : "Create your account and explore endless possibilities with us"}
          </p>
        </>
      )}
    </motion.div>
  );
};

export default WelcomeMessage;