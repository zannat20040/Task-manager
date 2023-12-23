import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Stat = () => {
  const userStatistics = [
    { type: "developer", users: 30 },
    { type: "designer", users: 15 },
    { type: "student", users: 12 },
    { type: "entrepreneur", users: 80 },
    { type: "freelancer", users: 20 },
    { type: "corporate", users: 18 },
    { type: "other", users: 10 },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="card-title text-4xl block text-center mb-3">
        Meet Our <span className="text-cyan-400  "> User</span> Community
      </h2>
      <div className="w-40 h-1 bg-cyan-400 mb-10 rounded-badge mx-auto"></div>
      <div data-aos="zoom-in" data-aos-duration="3000">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          modules={[Pagination]}
          className="mySwiper"
          
        >
          {userStatistics.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="  card shadow-md rounded-md  bg-cyan-400 text-center">
                <div className="card-body  flex-col justify-center items-center ">
                  <h2 className="card-title text-5xl flex-1 font-semibold">
                    {item.users}k
                  </h2>
                  <p className="capitalize  ">{item.type}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Stat;
