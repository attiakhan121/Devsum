import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Button from "../../components/Button";

const AuthForm = ({ type, onToggle }) => {
  const isLogin = type === "login";

  // Validation 
const schema = yup.object().shape(
  isLogin
    ? {
        username: yup.string().required("Username is required"),
        password: yup
          .string()
          .min(8, "Password must be at least 8 characters")
          .required("Password is required"),
      }
    : {
        username: yup.string().required("Username is required"),
        email: yup
          .string()
          .email("Enter a valid email")
          .matches(/^[a-zA-Z]/, "Email must start with a letter")
          .required("Email is required"),
        password: yup
          .string()
          .min(8, "Password must be at least 8 characters")
          .required("Password is required"),
      }
);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  useEffect(() => {
    reset(); 
  }, [type, reset]);

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    reset(); 
  };

  const fields = isLogin
  ? [
      { label: "Username", name: "username", type: "text", Icon: FiUser },
      { label: "Password", name: "password", type: "password", Icon: FiLock },
    ]
  : [
      { label: "Username", name: "username", type: "text", Icon: FiUser },
      { label: "Email", name: "email", type: "email", Icon: FiMail },
      { label: "Password", name: "password", type: "password", Icon: FiLock },
    ];

  const shakeVariants = {
    initial: { x: 0 },
    shake: {
      x: [0, -6, 6, -4, 4, 0],
      transition: { duration: 0.4 },
    },
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg mx-auto h-full flex flex-col justify-center px-6 py-6 white relative z-30"
    >
      <h2 className="text-[30px] font-semibold text-center mb-6">
        {isLogin ? "Login" : "Sign Up"}
      </h2>

      {fields.map(({ label, name, type, Icon }) => {
        const hasError = !!errors[name];
        const errorMessage = errors[name]?.message;

        return (
          <motion.div
            key={name}
            variants={shakeVariants}
            initial="initial"
            animate={hasError && isSubmitted ? "shake" : "initial"}
            className="relative w-full mb-4"
          >
            <input
              type={type}
              id={name}
              {...register(name)} 
              placeholder=" "
              autoComplete={isLogin && name === "username" ? "username" : "off"}
              className={`peer w-full h-10 bg-transparent outline-none border-b-2
                pr-8 pt-5 text-sm font-medium white transition-all duration-300
                ${
                  hasError
                    ? "border-red-500"
                    : "border-white focus:border-accent [&:not(:placeholder-shown)]:border-accent"
                }`}
            />

            <label
              htmlFor={name}
              className={`absolute left-0 text-sm pointer-events-none transition-all duration-300
                peer-placeholder-shown:top-1/2 peer-placeholder-shown:translate-y-[-50%]
                top-[-6px] peer-focus:top-[-6px] peer-focus:translate-y-0
                ${
                  hasError
                    ? "text-red-500"
                    : "white peer-focus:text-accent peer-[&:not(:placeholder-shown)]:text-accent"
                }`}
            >
              {label}
            </label>

            <Icon
              className={`absolute top-1/2 right-0 transform -translate-y-1/2 text-[16px] transition-all duration-300
                ${
                  hasError
                    ? "text-red-500"
                    : "white peer-focus:text-accent peer-[&:not(:placeholder-shown)]:text-accent"
                }`}
            />

            {hasError && (
              <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
            )}
          </motion.div>
        );
      })}

      <div className="relative w-32 h-[40px] rounded-full overflow-hidden border-2 border-accent hover:border-orange-600 transition-all duration-300">
        <Button type="submit"
                variant="primary"
                size="sm"
                className="w-32 h-[40px] border-2 border-accent hover:border-orange-600 rounded-full"
>           {isLogin ? "Login" : "Sign Up"}
       </Button>
      </div>

      <p className="text-sm white text-center mt-4 mb-1">
        {isLogin ? "Don’t have an account?" : "Already have an account?"}
        <span
          onClick={onToggle}
          className="text-accent hover:text-orange-600 hover:underline font-semibold ml-1 cursor-pointer transition-colors duration-300"
        >
          {isLogin ? "Sign Up" : "Login"}
        </span>
      </p>
    </form>
  );
};

AuthForm.propTypes = {
  type: PropTypes.oneOf(["login", "register"]).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default AuthForm;