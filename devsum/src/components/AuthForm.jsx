import { useEffect, useState } from "react";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import Button from "./Button";

const AuthForm = ({ type, onToggle }) => {
  const isLogin = type === "login";

  const initialState = {
    username: "",
    password: "",
    registerUsername: "",
    registerEmail: "",
    registerPassword: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData(initialState);
    setErrors({});
  }, [type]);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateEmail = (email) => {
    if (!/^[a-zA-Z]/.test(email)) {
      return "Email must start with a letter.";
    }
    if (!/^[a-zA-Z][a-zA-Z0-9._]*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(email)) {
      return "Enter a valid email.";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    const passwordField = isLogin ? "password" : "registerPassword";
    if (formData[passwordField].length < 8) {
      newErrors[passwordField] = "Password must be at least 8 characters.";
    }

    if (!isLogin) {
      const emailError = validateEmail(formData.registerEmail);
      if (emailError) {
        newErrors["registerEmail"] = emailError;
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const payload = isLogin
      ? {
          username: formData.username,
          password: formData.password,
        }
      : {
          username: formData.registerUsername,
          email: formData.registerEmail,
          password: formData.registerPassword,
        };

    console.log("Submitting form:", payload);
    setFormData(initialState);
  };

  return (

    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto h-full flex flex-col justify-center px-8 py-8 text-white"
    >
      {/* Heading */}
      <h2 className="text-[32px] font-semibold text-center mb-8">
        {isLogin ? "Login" : "Sign Up"}
      </h2>

      {fields.map(({ label, name, type, Icon }) => {
        const hasError = !!errors[name];
        const isFilled = formData[name];

        {/* Input Fields */}
        return (

          <div className="relative w-full mb-5" key={name}>
            <input
              type={type}
              id={name}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              aria-label={label}
              autoComplete={
                isLogin
                  ? name.toLowerCase().includes("password")
                    ? "current-password"
                    : name.toLowerCase().includes("username")
                    ? "username"
                    : "on"
                  : "off"
              }
              required
              className={`peer w-full h-12 bg-transparent outline-none border-b-2 ${
                hasError ? "border-red-500" : "border-white"
              } pr-8 pt-5 text-base text-white font-medium transition-all duration-500 focus:border-cyan-400`}
            />

            {/* Lable */}
            <label
              htmlFor={name}
              className={`absolute left-0 text-base transition-all duration-500 pointer-events-none ${
                isFilled || hasError
                  ? "top-[-6px]"
                  : "top-1/2 transform -translate-y-1/2"
              } ${
                hasError
                  ? "text-red-500"
                  : isFilled
                  ? "text-cyan-400"
                  : "peer-focus:top-[-6px] peer-focus:text-cyan-400"
              }`}
            >
              {label}
            </label>
            
            {/* Icon */}
            <Icon
              className={`absolute top-1/2 right-0 transform -translate-y-1/2 text-[18px] transition-all duration-500 ${
                hasError
                  ? "text-red-500"
                  : isFilled
                  ? "text-cyan-400"
                  : "text-white"
              }`}
            />

            {hasError && (
              <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
            )}
          </div>
        );
      })}

      {/* Button */}
      <div className="mt-0">
        <Button type="submit" variant="gradient">
          {isLogin ? "Login" : "Sign Up"}
        </Button>
      </div>

      {/* Links */}
      <p className="text-[14.5px] text-white text-center mt-5 mb-2">
        {isLogin ? "Don’t have an account?" : "Already have an account?"}
        <span
          onClick={onToggle}
          className="text-cyan-400 font-semibold ml-1 cursor-pointer hover:underline"
        >
          {isLogin ? "Sign Up" : "Login"}
        </span>
      </p>
    </form>
  );
};

export default AuthForm;