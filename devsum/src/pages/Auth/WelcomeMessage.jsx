import { motion } from "framer-motion";
import PropTypes from "prop-types";
import {
  Direction,
  desktopSlideVariants,
  mobileSlideVariants,
} from './AuthVariants';
import Images from "../../assets";

const WelcomeMessage = ({ type, variant }) => {
  const isLogin = type === "login";
  const isDesktop = variant === "desktop";
  const direction = isLogin ? Direction.RIGHT : Direction.LEFT;

  // Desktop
  if (isDesktop) {
    return (
      <motion.div
        key={`${type}-${variant}-msg`}
        custom={direction}
        variants={desktopSlideVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={`absolute ${isLogin ? "right-0" : "left-0"} w-1/2 h-full text-center
                    flex flex-col text-white px-9 z-20`}
      >
        <h2 className="text-[65px] font-bold leading-[1.3] mb-1 uppercase">
          DevSum
        </h2>
        <h5 className="text-[30px] font-semibold leading-[1.3] mb-4 uppercase tracking-wide">
          The Sum of Innovations
        </h5>
        <p className={`text-xl leading-snug ${isLogin ? "text-right" : "text-left"}`}>
          {isLogin
            ? "Welcome to the Future of Development"
            : "Create your account and explore endless possibilities with us"}
        </p>
        <motion.img
          src={isLogin ? Images.login : Images.signup}
          alt={isLogin ? "Login Illustration" : "Signup Illustration"}
          className={`w-[80%] max-w-xs mx-auto ${isLogin ? "mt-5 mr-[-50px]" : "mt-3 ml-[-50px]"}`}
          initial={{ y: 0 }}
          animate={{ y: [0, -25, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      </motion.div>
    );
  }

  // Mobile
  return (
    <div className="text-white w-full">
      <h2 className="text-3xl font-bold mb-1 uppercase">DevSum</h2>
      <h3 className="text-lg font-semibold mb-2 uppercase tracking-wide">
        The Sum of Innovations
      </h3>
      <p className="text-sm">
        {isLogin
          ? "Welcome to the Future of Development"
          : "Create your account and explore endless possibilities"}
      </p>
    </div>
  );
};

WelcomeMessage.propTypes = {
  type: PropTypes.oneOf(["login", "register"]).isRequired,
  variant: PropTypes.oneOf(["desktop", "mobile"]).isRequired,
};

export default WelcomeMessage;