import React, { useContext, useEffect } from "react";
import LoginForm from "./LoginForm";
import bgImg from "../assets/rm222batch3-mind-03.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider.jsx/AuthProvider";
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";

const Login = () => {
  const { loginWithPass, googleSignIn, githubSignIn } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()

  // direct login 
  const HandleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    loginWithPass(email, password)
      .then((userCredential) => {
        swal("Good job!", "Logged in successfully!", "success", );
        const user = {email}
        console.log(user)

        // jwt
        axios.post('http://localhost:5000/jwt', user,{withCredentials:true})
        .then(res=>{
          if(res.data.success){
            navigate(location?.state?.redirectTo? location?.state?.redirectTo : '/')
          }
          console.log(res.data)
        })
        .catch(err=>{
          console.log(err)
        })
      })
      .catch((error) => {
        swal("Opps!", error.message, "error");
      });
  };

  // google login
  const HandleGoogleSignin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
        swal("Good job!", "Logged in successfully!", "success");
        navigate(location?.state?.redirectTo? location?.state?.redirectTo : '/')
      })
      .catch((error) => {
        swal("Opps!", error, "error");
      });
  };

  // github login
  const HandleGithubSignin = () => {
    githubSignIn()
      .then((result) => {
        console.log(result);
        swal("Good job!", "Logged in successfully!", "success");
        navigate(location?.state?.redirectTo? location?.state?.redirectTo : '/')
      })
      .catch((error) => {
        swal("Opps!", error, "error");
      });
  };


  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <>
      <div className="">
        <div className="overflow-y-hidden min-h-screen flex flex-col-reverse sm:grid lg:grid-cols-3 sm:grid-cols-2  justify-center ">
          <div data-aos="fade-right" className=" shrink-0 lg:col-span-2 items-center justify-center ">
            <div
              className="hero h-full"
              style={{ backgroundImage: `url(${bgImg})` }}
            >
              <div className="card w-full py-20">
                <LoginForm
                  HandleLogin={HandleLogin}
                  HandleGithubSignin={HandleGithubSignin}
                  HandleGoogleSignin={HandleGoogleSignin}
                ></LoginForm>
              </div>
            </div>
          </div>
          <div data-aos="fade-left" className="text-center  lg:text-left   bg-cyan-400">
            <div className=" sticky  right-0  p-5">
              <Link to="/">
                <button className="text-lg rounded-full bg-white text-cyan-400 border-cyan-400 border w-12 h-12 hover:text-cyan-400 hover:bg-black flex justify-center items-center transition-all">
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
              <Link to="/signin">
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
