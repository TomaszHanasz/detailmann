import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import reviewOne from "./../../assets/review1.jpg";
import reviewTwo from "../../assets/review2.jpg";
import { Fade } from "react-awesome-reveal";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./reviews.style.css";

// import required modules
import { Autoplay } from "swiper/modules";

const Reviews = () => {
  return (
    <>
      <Fade>
        <div className="reviews__container">
          <h2 className="reviews__title fancy">Co piszą o nas nasi klienci</h2>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            speed={2000}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="reviewsSwiper"
          >
            <SwiperSlide>
              <img
                className="swiper__review"
                src={reviewOne}
                alt="opinia z google"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="swiper__review"
                src={reviewTwo}
                alt="opinia z google"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </Fade>
    </>
  );
};

export default Reviews;
