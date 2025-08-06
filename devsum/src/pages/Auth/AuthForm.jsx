import { useEffect, useId } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useAuth } from "../../context/AuthContext";
import Button from "../../components/Button";
import Alert from "./Alert";

const AuthForm = ({ type, onToggle }) => {
  const { login, register, loading, error, setError } = useAuth();
  const isLogin = type === "login";

  const { id } = useId();

  const schema = yup.object().shape(
    isLogin
      ? {
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
      : {
          username: yup
            .string()
            .required("Username is required")
            .min(3, "Username must be at least 3 characters")
            .max(20, "Username must not exceed 20 characters"),
          email: yup
            .string()
            .email("Enter a valid email")
            .matches(/^[a-zA-Z]/, "Email must start with a letter")
            .required("Email is required"),
          password: yup
            .string()
            .min(8, "Password must be at least 8 characters")
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
              "Password must contain uppercase, lowercase, number, and special character"
            )
            .required("Password is required"),
        }
  );

  const {
    register: formRegister,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  useEffect(() => {
    reset();
    setError(null);
  }, [type, reset, setError]);

  const onSubmit = async (data) => {
    const result = isLogin ? await login(data) : await register(data);

    if (result.success) {
      reset();
    }
  };

  const fields = isLogin
    ? [
        { label: "Email", name: "email", type: "email", Icon: FiMail },
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
      className="w-full max-w-md mx-auto h-full flex flex-col justify-center px-4 py-8 relative z-30"
    >
      <h2 className="text-4xl font-semibold text-center mb-6 text-white">
        {isLogin ? "Login" : "Sign Up"}
      </h2>

      {error && (
        <Alert variant="error" className="mb-4">
          {error}
        </Alert>
      )}

      {fields.map(({ label, name, type, Icon }) => {
        const hasError = !!errors[name];
        const errorMessage = errors[name]?.message;

        return (
          <motion.div
            key={name}
            variants={shakeVariants}
            initial="initial"
            animate={hasError && isSubmitted ? "shake" : "initial"}
            className="relative w-full mb-6"
          >
            <div className="relative">
              <input
                type={type}
                id={id}
                {...formRegister(name)}
                placeholder=" "
                autoComplete={isLogin && name === "email" ? "email" : "off"}
                disabled={loading}
                className={`peer w-full h-10 bg-transparent outline-none border-b-2
                  pr-10 pt-6 text-md font-medium text-border-white transition-all duration-300
                  ${
                    hasError
                      ? "border-red-500"
                      : "border-white focus:border-accent [&:not(:placeholder-shown)]:border-accent"
                  }`}
              />

              <label
                htmlFor={id}
                className={`absolute left-0 text-md pointer-events-none transition-all duration-300
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
                className={`absolute top-1/2 right-0 transform -translate-y-1/2 text-xl transition-all duration-300
                  ${
                    hasError
                      ? "text-red-500"
                      : "white peer-focus:text-accent  peer-[&:not(:placeholder-shown)]:text-accent"
                  }`}
              />
            </div>

            {hasError && (
              <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
            )}
          </motion.div>
        );
      })}

      <div className="mt-8">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full border-2 border-accent hover:border-orange-600 rounded-full"
          disabled={loading}
          isLoading={loading}
        >
          {isLogin ? "Login" : "Sign Up"}
        </Button>
      </div>

      <p className="text-md text-white text-center mt-6">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button
          type="button"
          onClick={onToggle}
          disabled={loading}
          className="ml-1 font-semibold text-accent hover:text-orange-600 hover:underline focus:outline-none transition-colors duration-200"
        >
          {isLogin ? "Sign up" : "Sign in"}
        </button>
      </p>
    </form>
  );
};

AuthForm.propTypes = {
  type: PropTypes.oneOf(["login", "register"]).isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default AuthForm;