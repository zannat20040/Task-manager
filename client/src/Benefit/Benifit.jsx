import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../assets/3529197.jpg";
import img2 from "../assets/4002785.jpg";
import img3 from "../assets/4505770.jpg";
import img4 from "../assets/8262263.jpg";
import { LuQuote } from "react-icons/lu";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Benifit = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    axios
      .get("./testimonial.json")
      .then((res) => {
        setTestimonials(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-24 px-4  ">
      <h2 className="card-title text-4xl block text-center mb-3">
        Know <span className="text-cyan-400  "> How</span> Our Client
        <span className="text-cyan-400  "> Get Benifit</span>
      </h2>
      <div className="w-40 h-1 bg-cyan-400 mb-10 rounded-badge mx-auto"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-between items-center">
        <div className="w-full">
          <img src={img1} className="w-full " alt="" data-aos="fade-right" />
        </div>{" "}
        <div className="">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Scrollbar, Autoplay]}
            className="mySwiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className=" py-10 " data-aos="fade-left">
                  <LuQuote className="absolute text-slate-300 text-9xl top-[-5px] right-20" />
                  <p className="relative mb-5  font-light text-xl">
                    {testimonial?.review}
                  </p>
                  <p className="ml-5 mb-2 text-end text-cyan-400  tracking-widest ">
                    - {testimonial.name}
                  </p>
                  <p className="ml-5 text-end   tracking-widest ">
                    {testimonial.profession}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Benifit;
