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
import { Pagination, Autoplay } from "swiper/modules";

const Reviews = () => {
  return (
    <>
      <Fade>
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
          modules={[Pagination, Autoplay]}
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
      </Fade>
    </>
  );
};

export default Reviews;
