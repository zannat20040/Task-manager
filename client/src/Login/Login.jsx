import React from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen container mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <RegisterForm></RegisterForm>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <LoginForm></LoginForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
