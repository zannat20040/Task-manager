import React, { useContext } from "react";
import LoginForm from "./LoginForm";
import bgImg from "../assets/rm222batch3-mind-03.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider.jsx/AuthProvider";

const Login = () => {
  const { loginWithPass, googleSignIn } = useContext(AuthContext);

  const HandleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
console.log(email, password)
    loginWithPass(email, password)
      .then((userCredential) => {
        swal("Good job!", "Logged in successfully!", "success");
        console.log(userCredential.user)       

      })
      .catch((error) => {
        swal("Opps!", error.message , "error");
      });
  };


  return (
    <>
      <div className="">
        <div className="overflow-y-hidden min-h-screen flex justify-center ">
          <div className=" shrink-0 w-3/5  items-center justify-center ">
            <div
              className="hero h-full"
              style={{ backgroundImage: `url(${bgImg})` }}
            >
              <div className="card w-full">
                <LoginForm HandleLogin={HandleLogin}></LoginForm>
              </div>
            </div>
          </div>
          <div className="text-center  lg:text-left  flex-1 bg-cyan-400">
            <div className=" fixed  right-0  p-5">
              <Link to="/">
                <button
                  className="text-lg rounded-full bg-white text-cyan-400 border-cyan-400 border w-12 h-12 hover:text-cyan-400 hover:bg-black flex justify-center items-center transition-all"
                  //   onClick={HandleGoogleSignin}
                >
                  <FaLongArrowAltRight className="p-1 text-3xl" />
                </button>
              </Link>
            </div>
            <div className="flex flex-col  justify-center items-center min-h-screen px-10 ">
              <h1 className="text-5xl font-bold">Dear, User!</h1>
              <div className="w-40 h-1 bg-black mt-3 rounded-badge"></div>
              <p className="py-6 text-center">
                Fillup your personal information & start journey with us
              </p>
              <Link to='/signin'>
                <button className="btn btn-outline rounded-badge btn-wide">
                  Register Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
