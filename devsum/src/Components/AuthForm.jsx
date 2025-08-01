import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { motion } from "framer-motion";

const AuthForm = ({ type, onToggle }) => {
  const isLogin = type === "login";

  // Validation Schema
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
          registerUsername: yup.string().required("Username is required"),
          registerEmail: yup
            .string()
            .email("Enter a valid email")
            .matches(/^[a-zA-Z]/, "Email must start with a letter")
            .required("Email is required"),
          registerPassword: yup
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
    reset(); // Clear form when switching between login/register
  }, [type, reset]);

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    reset(); // Clear after submit
  };

  const fields = isLogin
    ? [
        { label: "Username", name: "username", type: "text", Icon: FiUser },
        { label: "Password", name: "password", type: "password", Icon: FiLock },
      ]
    : [
        { label: "Username", name: "registerUsername", type: "text", Icon: FiUser },
        { label: "Email", name: "registerEmail", type: "email", Icon: FiMail },
        { label: "Password", name: "registerPassword", type: "password", Icon: FiLock },
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
      className="w-full max-w-lg mx-auto h-full flex flex-col justify-center px-6 py-6 text-white relative z-30"
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
              {...register(name)} // ✅ FIXED: Connected to react-hook-form
              placeholder=" "
              autoComplete="off"
              className={`peer w-full h-10 bg-transparent outline-none border-b-2
                pr-8 pt-5 text-sm font-medium text-white transition-all duration-300
                ${
                  hasError
                    ? "border-red-500"
                    : "border-white focus:border-orange-500 [&:not(:placeholder-shown)]:border-orange-500"
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
                    : "text-white peer-focus:text-orange-500 peer-[&:not(:placeholder-shown)]:text-orange-500"
                }`}
            >
              {label}
            </label>

            <Icon
              className={`absolute top-1/2 right-0 transform -translate-y-1/2 text-[16px] transition-all duration-300
                ${
                  hasError
                    ? "text-red-500"
                    : "text-white peer-focus:text-orange-500 peer-[&:not(:placeholder-shown)]:text-orange-500"
                }`}
            />

            {hasError && (
              <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
            )}
          </motion.div>
        );
      })}

      <div className="relative w-32 h-[40px] rounded-full overflow-hidden border-2 border-orange-500 hover:border-orange-600 transition-all duration-300">
        <button
          type="submit"
          className="relative z-10 w-full h-full flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-full transition-colors duration-300"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </div>

      <p className="text-sm text-white text-center mt-4 mb-1">
        {isLogin ? "Don’t have an account?" : "Already have an account?"}
        <span
          onClick={onToggle}
          className="text-orange-500 hover:text-orange-600 hover:underline font-semibold ml-1 cursor-pointer transition-colors duration-300"
        >
          {isLogin ? "Sign Up" : "Login"}
        </span>
      </p>
    </form>
  );
};

export default AuthForm;