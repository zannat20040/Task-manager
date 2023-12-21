import React from "react";
import bgImg from "../assets/rm222batch3-mind-03.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import { imgUpload } from "../Hooks/ImgUpload";

const Register = () => {

  const HandleSignup = async(e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
   const image = form.photo.files[0];
    const photo = await imgUpload(image)    

    console.log(name, email, password, photo);

 
  };


  return (
    <>
      <div className="">
        <div className="overflow-y-hidden min-h-screen flex justify-center ">
          <div className="text-center  lg:text-left  flex-1 bg-cyan-400">
            <div className=" fixed  right-0  p-5">
              <Link to="/">
                <button
                  className="text-lg rounded-full bg-cyan-400 text-white w-12 h-12 hover:text-cyan-400 hover:bg-black flex justify-center items-center transition-all"
                  //   onClick={HandleGoogleSignin}
                >
                  <FaLongArrowAltRight className="p-1 text-3xl" />
                </button>
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center min-h-screen px-10 ">
              <h1 className="text-5xl font-bold">Welcome back!</h1>
              <div className="w-40 h-1 bg-black mt-3 rounded-badge"></div>
              <p className="py-6 text-center">
                To keep connected with us please log in with your personal information
              </p>
              <Link to="/login">
                <button className="btn btn-outline rounded-badge btn-wide">
                  Log in now
                </button>
              </Link>
            </div>
          </div>
          <div className=" shrink-0 w-3/5  items-center justify-center ">
            <div
              className="hero h-full"
              style={{ backgroundImage: `url(${bgImg})` }}
            >
              <div className="card w-full">
                <RegisterForm HandleSignup={HandleSignup}></RegisterForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
