import React, { useEffect } from "react";
import bannerimg from "../assets/4380.jpg";
import { Link } from "react-router-dom";
import { LuTwitter , LuFacebook, LuInstagram , LuLinkedin  } from "react-icons/lu";

const Banner = () => {


  return (
    <div className="card card-side container  mx-auto rounded-none py-10 lg:py-20 items-center ">
       
    <div data-aos="fade-left" className="card-body w-full">
      <a className="text-5xl font-extrabold "><span className="text-5xl font-extrabold text-cyan-500">Task</span> Manager</a>
      <p className="text-slate-500 font-light mt-4">
        Empowering yourself with Seamless task Management effortless ,
        anytime , anywhere. Begin your journey today and experience the ease
        of staying organized, boosting productivity, and achieving your
        goals with our intuitive task management solution!
      </p>
      <div className="card-actions ">
        <Link to="/login">
          <button className="btn shadow-md bg-black text-cyan-400 hover:text-black  hover:bg-cyan-500 border mt-5 rounded-badge btn-wide">
            Let’s Explore
          </button>
        </Link>
      </div>
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
    <figure data-aos="fade-right" className="w-0 md:w-full">
      <img src={bannerimg} alt="Movie" className="" />
    </figure>
  </div>
  );
};

export default Banner;
