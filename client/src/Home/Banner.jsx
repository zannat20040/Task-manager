import React from "react";
import bannerimg from "../assets/4380.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="">
      <div className="card card-side  container  mx-auto rounded-none py-20 items-center ">
        <figure className="w-full">
          <img src={bannerimg} alt="Movie" className="" />
        </figure>
        <div className="card-body w-full">
          <h2 className="card-title text-4xl inline">
            Get Started <span className="text-cyan-400 ">Today!</span>
          </h2>
          <h2 className="card-title text-4xl inline">
            Empowering Yourself with Seamless{" "}
            <span className="text-cyan-400 ">Task Management</span>
          </h2>
          <p>Effortless , Anytime , Anywhere</p>
          <div className="card-actions ">
            <Link to="/login">
              <button className="btn text-black bg-cyan-400 border-none text-base hover:bg-black hover:text-cyan-400 btn-primary mt-5 rounded-badge btn-wide">
                Let’s Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
