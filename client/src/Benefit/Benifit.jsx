import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaFeatherPointed } from "react-icons/fa6";
import img1 from "../assets/3529197.jpg";
import img2 from "../assets/4002785.jpg";
import img3 from "../assets/4505770.jpg";
import img4 from "../assets/8262263.jpg";
import { CiLinkedin } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { LuTwitter } from "react-icons/lu";
import { CiFacebook } from "react-icons/ci";
const Benifit = () => {
  const userBenefits = [
    "Meet project deadlines",
    "Streamline project planning",
    "Assign tasks with ease",
    "Keep track of assignments",
    "Manage study schedules",
    "Manage business tasks",
    "Achieve project goals effectively",
    "Enhance productivity",
    "Manage work tasks efficiently",
    "Customize the task management system",
  ];

  return (
    <div className="container mx-auto mt-14 px-4  ">
      <div className="grid grid-cols-2 gap-5 justify-between items-center ">
        <div>
          <h2 className="card-title text-4xl block  mb-3">
            Our Community,{" "}
            <span className="text-cyan-400  "> Your Advantage</span>
          </h2>
          <div className="w-40 h-1 bg-cyan-400 rounded-badge mb-3"></div>
          <p>
            Whether you're a student managing assignments or a corporate
            professional optimizing work tasks, find the right features to boost
            your productivity.
          </p>
          <div className="mt-5">
            {userBenefits.map((item) => (
              <div className="flex gap-2 items-center ">
                <FaFeatherPointed className="text-cyan-400" />{" "}
                <p className="capitalize"> {item}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-5">
            <button className="text-lg rounded-full text-cyan-400 border-cyan-400 border w-10 h-10 hover:text-white hover:bg-cyan-400 flex justify-center items-center transition-all">
              <CiLinkedin />
            </button>
            <button className="text-lg rounded-full text-cyan-400 border-cyan-400 border w-10 h-10 hover:text-white hover:bg-cyan-400 flex justify-center items-center transition-all">
              <CiInstagram />
            </button>
            <button className="text-lg rounded-full text-cyan-400 border-cyan-400 border w-10 h-10 hover:text-white hover:bg-cyan-400 flex justify-center items-center transition-all">
              <CiFacebook />
            </button>
            <button className="text-lg rounded-full text-cyan-400 border-cyan-400 border w-10 h-10 hover:text-white hover:bg-cyan-400 flex justify-center items-center transition-all">
              <LuTwitter />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 ">
          <img src={img1} alt="" className="shadow-xl h-full " />
          <img src={img2} alt="" className="shadow-xl h-full " />
          <img src={img3} alt="" className="shadow-xl h-full" />
          <img src={img4} alt="" className="shadow-xl h-full " />
        </div>
      </div>
    </div>
  );
};

export default Benifit;
