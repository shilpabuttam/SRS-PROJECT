import React from "react";

import "../assets/css/homepageswiper.css";


import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import swiperimage1 from "../assets/images/swiperimg1.png";
import swiperimage2 from "../assets/images/swiperimg2.png";
import swiperimage3 from "../assets/images/swiperimg3.png";
import swiperimage4 from "../assets/images/swiperimg4.png";
import swiperimage5 from "../assets/images/swiperimg5.png";
import swiperimage6 from "../assets/images/swiperimg6.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function Homepageswiper() {
  return (
    <>
      <div className="home-swiperdiv">
        <div className="home-miniswiperdiv">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 2000 }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <div className="home-swiperslidediv">
                <div className="home-swiperimagediv">
                  <img className="home-swiperimage" src={swiperimage1} alt="" />
                </div>
                <p>
                  Transform your business with cutting-edge technology and
                  tailored IT services.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="home-swiperslidediv">
                <div className="home-swiperimagediv">
                  <img className="home-swiperimage" src={swiperimage2} alt="" />
                </div>
                <p>
                  Secure, scalable, and cost-effective cloud solutions for
                  modern enterprises.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="home-swiperslidediv">
                <div className="home-swiperimagediv">
                  <img className="home-swiperimage" src={swiperimage3} alt="" />
                </div>
                <p>
                  Keep your data safe with advanced security measures and
                  proactive monitoring.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="home-swiperslidediv">
                <div className="home-swiperimagediv">
                  <img className="home-swiperimage" src={swiperimage4} alt="" />
                </div>
                <p>
                  Custom-built applications to enhance efficiency and drive
                  innovation.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="home-swiperslidediv">
                <div className="home-swiperimagediv">
                  <img className="home-swiperimage" src={swiperimage5} alt="" />
                </div>
                <p>
                  Leverage AI-driven solutions for smarter business operations
                  and growth.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="home-swiperslidediv">
                <div className="home-swiperimagediv">
                  <img className="home-swiperimage" src={swiperimage6} alt="" />
                </div>
                <p>
                  Expert guidance and round-the-clock support for
                  seamless IT management.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
