import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Stat = () => {
  const userStatistics = [
    { type: "developer", users: 30 },
    { type: "project Manager", users: 25 },
    { type: "designer", users: 15 },
    { type: "student", users: 12 },
    { type: "entrepreneur", users: 80 },
    { type: "freelancer", users: 20 },
    { type: "corporate", users: 18},
    { type: "other", users: 10 },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="card-title text-4xl block text-center mb-10">
        Meet Our <span className="text-cyan-400  "> User</span> Community
      </h2>

      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
      {userStatistics.map((item) => (
            <SwiperSlide>
              <div className="card shadow-md rounded-md h-max bg-cyan-400 text-center">
                <div className="card-body justify-center items-center">
                  <h2 className="card-title text-5xl  font-semibold">{item.users}k</h2>
                  <p className="capitalize  ">{item.type}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
     
      </Swiper>
    </div>
  );
};

export default Stat;
