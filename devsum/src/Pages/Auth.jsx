import React, { useState } from "react";
import AuthForm from "../Components/AuthForm";

const Auth = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [formResetKey, setFormResetKey] = useState(0); 

  const handleToggle = () => {
    setShowRegister((prev) => !prev);
    setFormResetKey((prev) => prev + 1); 
  };

  return (
    <main className="min-h-screen bg-[#3a64ba] flex items-center justify-center">
      <section className="relative w-full max-w-[800px] h-auto md:h-[500px] border-2 border-cyan-400 shadow-[0_0_25px_#0ef] overflow-hidden bg-transparent">

        {/* Diagonal Shapes */}
        <span
          className={`absolute top-[-4px] right-0 w-[850px] h-[600px] bg-[linear-gradient(45deg,#122748,#2b579f)] 
            border-b-[3px] border-cyan-400 origin-bottom-right z-20 transition-all duration-[1500ms] transform 
            ${showRegister
              ? "rotate-0 skew-y-0 delay-[500ms]"
              : "rotate-[10deg] skew-y-[40deg] delay-[1000ms]"}`}
        />
        <span
          className={`absolute top-full left-[250px] w-[850px] h-[700px] bg-[#081629] border-t-[3px] border-cyan-400 
            origin-bottom-left z-30 transition-all duration-[1500ms] transform
            ${showRegister
              ? "rotate-[-11deg] skew-y-[-41deg] delay-[1000ms]"
              : "rotate-0 skew-y-0 delay-[0ms]"}`}
        />

        {/* Login Form */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full z-20 transition-all duration-[900ms]
            ${showRegister
              ? "pointer-events-none opacity-0 blur-sm -translate-x-full delay-[0ms]"
              : "pointer-events-auto opacity-100 blur-0 translate-x-0 delay-[1600ms]"}`}
        >
          <AuthForm
            key={`login-${formResetKey}`}
            type="login"
            onToggle={handleToggle}
          />
        </div>

        {/* Login Welcome Panel */}
        <aside
          className={`absolute top-0 right-0 w-1/2 h-full flex flex-col justify-start items-end text-white px-10 pt-16 z-20
            ${showRegister
              ? "translate-x-full opacity-0 blur-sm pointer-events-none delay-[0ms]"
              : "translate-x-0 opacity-100 blur-0 pointer-events-auto delay-[1600ms]"}
            transition-all duration-[900ms]`}
        >
          <h2 className="text-[36px] uppercase leading-[1.3] mb-4 font-bold text-right">
            Welcome<br />To E-<br />Commerce<br />Store
          </h2>
          <p className="text-base text-right leading-snug">
            Hi, Here you will get all<br />kinds of stuff
          </p>
        </aside>

        {/* Sign Up Form */}
        <div
          className={`absolute top-0 right-0 w-1/2 h-full z-30 transition-all duration-[900ms]
            ${showRegister
              ? "translate-x-0 opacity-100 blur-0 delay-[1600ms]"
              : "translate-x-full opacity-0 blur-sm pointer-events-none delay-[0ms]"}`}
        >
          <AuthForm
            key={`register-${formResetKey}`}
            type="register"
            onToggle={handleToggle}
          />
        </div>

        {/* Sign Up Welcome Panel */}
        <aside
          className={`absolute top-4 left-0 w-1/2 h-full flex flex-col justify-start items-start text-white 
            px-10 pt-20 z-20 transition-all duration-[900ms] 
            ${showRegister
              ? "translate-x-0 opacity-100 blur-0 delay-[1600ms]"
              : "-translate-x-full opacity-0 blur-sm pointer-events-none delay-[0ms]"}`}
        >
          <h2 className="text-[36px] uppercase leading-[1.3] mb-4 font-bold text-left">
            E-<br />Commerce<br />Store
          </h2>
          <p className="text-base text-left leading-snug">
            Join Us today and get <br /> amazing product and <br /> shopify ❤
          </p>
        </aside>

      </section>
    </main>
  );
};

export default Auth;