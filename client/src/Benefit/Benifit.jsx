import React from "react";

const Benifit = () => {
  return (
    <div className="container mx-auto">
      
      <div className="grid grid-cols-2 gap-5 justify-between">
      <div>
      <h2 className="card-title text-4xl block text-center mb-10">
        Our Community, <span className="text-cyan-400  "> Your Advantage</span>
      </h2>
      </div>
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
                <h2 className="card-title text-5xl  font-semibold">
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

export default Benifit;
