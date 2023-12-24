import React from "react";
import img2 from "../assets/4002785.jpg";
import { Link } from "react-router-dom";
import { LuTwitter, LuFacebook, LuInstagram, LuLinkedin } from "react-icons/lu";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <>
      <div className="card card-side container grid  grid-cols-1 md:grid-cols-2 gap-2 justify-between  mx-auto rounded-none py-10  items-center ">
        <figure className="">
          <img src={img2} alt="Movie" className="" />
        </figure>
        <div className="card-body w-full">
          <a className="text-5xl font-extrabold ">
            <span className="text-5xl font-extrabold text-cyan-500">About</span>{" "}
            Us
          </a>
          <p className="text-slate-500 font-light mt-4">
            At <span>Task Manager</span> , we are a team of dedicated
            individuals passionate about productivity and innovation. We believe
            that everyone deserves a tool that simplifies their daily tasks,
            whether it's managing personal to-do lists or collaborating on
            complex projects. Our commitment is to deliver a reliable and
            user-friendly task management experience.
          </p>

          <div className="flex gap-3 mt-5">
            <button className="text-lg rounded-full text-black border-black border w-10 h-10 hover:text-white hover:bg-black flex justify-center items-center transition-all">
              <LuLinkedin />
            </button>
            <button className="text-lg rounded-full text-black border-black border w-10 h-10 hover:text-white hover:bg-black flex justify-center items-center transition-all">
              <LuInstagram />
            </button>
            <button className="text-lg rounded-full text-black border-black border w-10 h-10 hover:text-white hover:bg-black flex justify-center items-center transition-all">
              <LuFacebook />
            </button>
            <button className="text-lg rounded-full text-black border-black border w-10 h-10 hover:text-white hover:bg-black flex justify-center items-center transition-all">
              <LuTwitter />
            </button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
