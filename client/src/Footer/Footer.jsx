import React from "react";
import { LuTwitter, LuFacebook, LuInstagram, LuLinkedin } from "react-icons/lu";
import { BiTask } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="footer flex-col gap-y-4  md:flex-row-reverse  justify-center md:justify-between items-center text-center p-4 mt-10 text-black bg-cyan-400 px-6">
      <aside className="items-center grid-flow-col">
        <BiTask className="text-3xl text-black" />
        <p>Copyright © 2023 - All right reserved by Task Manager</p>
      </aside>
      <nav className="grid-flow-col gap-4 place-self-center md:justify-self-end">
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
      </nav>
    </footer>
  );
};

export default Footer;
