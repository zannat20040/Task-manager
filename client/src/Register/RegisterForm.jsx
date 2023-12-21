import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGooglePlusG } from "react-icons/fa6";

const RegisterForm = () => {
  return (
    //     <form className="  card-body p-2" >
    //     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    //       <div className="form-control">
    //         <label className="label">
    //           <span className="label-text">Full name</span>
    //         </label>
    //         <input
    //           type="text"
    //           placeholder="name"
    //           className="input input-bordered"
    //           required
    //           name="name"
    //         />
    //       </div>
    //       <div className="form-control">
    //         <label className="label">
    //           <span className="label-text">Photo </span>
    //         </label>
    //         <input
    //           type="file"
    //           className="file-input file-input-bordered w-full "
    //           placeholder="photo url"
    //           required
    //           name="photo"
    //           accept="image/*"
    //         />
    //       </div>
    //     </div>
    //     <div className="form-control">
    //       <label className="label">
    //         <span className="label-text">Email</span>
    //       </label>
    //       <input
    //         type="email"
    //         placeholder="email"
    //         className="input input-bordered"
    //         required
    //         name="email"
    //       />
    //     </div>
    //     <div className="form-control">
    //       <label className="label">
    //         <span className="label-text">Password</span>
    //       </label>
    //       <input
    //         type="password"
    //         placeholder="password"
    //         className="input input-bordered"
    //         required
    //         name="password"
    //       />
    //     </div>
    //     <div className="form-control mt-6">
    //       <button className="btn btn-outline bg-green-900 text-white">
    //         Signup
    //       </button>
    //     </div>
    //   </form>

    <form className="w-2/3 mx-auto text-center">
      <h1 className="text-5xl font-bold text-cyan-400">Create Account</h1>
      <div className="w-40 h-1 bg-cyan-400 mt-3 rounded-badge mx-auto"></div>

      <div className="flex gap-2 my-5 justify-center">
        <button
          className="text-lg rounded-full text-cyan-400 border-cyan-400 border w-10 h-10 hover:text-white hover:bg-cyan-400 flex justify-center items-center transition-all"
          //   onClick={HandleGoogleSignin}
        >
          <FaGooglePlusG className="p-1 text-4xl" />
        </button>
        <button
          className="text-lg rounded-full text-cyan-400 border-cyan-400 border w-10 h-10 hover:text-white hover:bg-cyan-400 flex justify-center items-center transition-all"
          //   onClick={HandleGoogleSignin}
        >
          <FaGithub className="p-1 text-4xl" />
        </button>
      </div>

      <p className="my-5 text-gray-400">Or, use your email for registration</p>

      <div className="flex gap-2 flex-col">
        <div className="form-control ">
          <input
            type="text"
            placeholder="name"
            className="input group focus:border-cyan-400 focus:outline-none rounded-badge "
            required
            name="name"
          />
        </div>

        <div className="form-control">
          <input
            type="file"
            placeholder="photo url"
            required
            name="photo"
            accept="image/*"
            className="file-input group focus:border-cyan-400 focus:outline-none rounded-badge "
          />
        </div>
        <div className="form-control ">
          <input
            type="email"
            placeholder="email"
            className="input group focus:border-cyan-400 focus:outline-none rounded-badge "
            required
            name="email"
          />
        </div>

        <div className="form-control">
          <input
            type="password"
            placeholder="password"
            className="input group  rounded-badge focus:border-cyan-400 focus:outline-none"
            required
            name="password"
          />
        </div>
      </div>

      <div className="form-control items-center ">
        <button className="btn text-black bg-cyan-400 border-none text-base hover:bg-black  hover:text-cyan-400 btn-primary mt-3 rounded-badge btn-wide">
          Register
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
