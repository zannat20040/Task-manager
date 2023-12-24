import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGooglePlusG } from "react-icons/fa6";

const LoginForm = ({ HandleLogin, HandleGoogleSignin, HandleGithubSignin }) => {
  return (
    <div className="px-6 mx-auto">
      <div>
        <h1 className="text-5xl font-bold text-cyan-400">Sign in to Account</h1>
        <div className="w-40 h-1 bg-cyan-400 mt-3 rounded-badge"></div>
        <div className="flex gap-2 my-5">
          <button
            className="text-lg rounded-full text-cyan-400 border-cyan-400 border w-10 h-10 hover:text-white hover:bg-cyan-400 flex justify-center items-center transition-all"
            onClick={HandleGoogleSignin}
          >
            <FaGooglePlusG className="p-1 text-4xl" />
          </button>
          <button
            className="text-lg rounded-full text-cyan-400 border-cyan-400 border w-10 h-10 hover:text-white hover:bg-cyan-400 flex justify-center items-center transition-all"
            onClick={HandleGithubSignin}
          >
            <FaGithub className="p-1 text-4xl" />
          </button>
        </div>
        <p className="my-5 text-gray-400">Or, use your email account </p>
      </div>
      <form onSubmit={HandleLogin}>
        <div className="form-control">
          <input
            type="email"
            placeholder="email"
            className="input group focus:border-cyan-400 focus:outline-none rounded-badge "
            required
            name="email"
          />
        </div>

        <div className="form-control mt-2 ">
          <input
            type="password"
            placeholder="password"
            className="input group  rounded-badge focus:border-cyan-400 focus:outline-none"
            required
            name="password"
          />
        </div>

        <div className="form-control ">
          <button className="btn text-black bg-cyan-400 border-none text-base hover:bg-black  hover:text-cyan-400 btn-primary mt-3 rounded-badge btn-wide">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
