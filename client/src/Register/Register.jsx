import React, { useContext, useEffect } from "react";
import bgImg from "../assets/rm222batch3-mind-03.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import { imgUpload } from "../Hooks/ImgUpload";
import { AuthContext } from "../AuthProvider.jsx/AuthProvider";
import swal from "sweetalert";
import { updateProfile } from "firebase/auth";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Register = () => {
  const { createWithPass, googleSignIn,githubSignIn } = useContext(AuthContext);

  // direct sign up
  const HandleSignup = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.photo.files[0];
    const photo = await imgUpload(image);

    createWithPass(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        swal("Good job!", "Signed up successfully!", "success");

        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        swal("Opps!", error.message, "error");
      });
  };

  // google signup
  const HandleGoogleSignin = () => {
    googleSignIn()
      .then((result) => {
        console.log(result);
        swal("Good job!", "Logged in successfully!", "success");
      })
      .catch((error) => {
        swal("Opps!", error, "error");
      });
  };

  // github signup
  const HandleGithubSignin = () => {
    githubSignIn()
      .then((result) => {
        console.log(result);
        swal("Good job!", "Logged in successfully!", "success");
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
        <div className="flex-col md:grid lg:grid-cols-3 md:grid-cols-2 overflow-y-hidden min-h-screen flex justify-center ">
          <div  data-aos="fade-right" className="text-center  lg:text-left  flex-1 bg-cyan-400">
            <div className=" sticky  right-0  p-5">
              <Link to="/">
                <button
                  className="text-lg rounded-full bg-cyan-400 border border-white text-white w-12 h-12 hover:text-cyan-400 hover:bg-black flex justify-center items-center transition-all"
                >
                  <FaLongArrowAltRight className="p-1 text-3xl" />
                </button>
              </Link>
            </div>
            <div className="flex flex-col py-20 justify-center items-center min-h-screen px-10 ">
              <h1 className="text-5xl font-bold text-center">Welcome back!</h1>
              <div className="w-40 h-1 bg-black mt-3 rounded-badge"></div>
              <p className="py-6 text-center">
                To keep connected with us please log in with your personal
                information
              </p>
              <Link to="/login">
                <button className="btn btn-outline rounded-badge btn-wide">
                  Log in now
                </button>
              </Link>
            </div>
          </div>
          <div data-aos="fade-left" className=" shrink-0  lg:col-span-2   items-center justify-center ">
            <div
              className="hero h-full"
              style={{ backgroundImage: `url(${bgImg})` }}
            >
              <div className="card w-full py-20">
                <RegisterForm
                  HandleGithubSignin={HandleGithubSignin}
                  HandleSignup={HandleSignup}
                  HandleGoogleSignin={HandleGoogleSignin}
                ></RegisterForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
