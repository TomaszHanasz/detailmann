import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
} from "../../data/images";
import { Fade } from "react-awesome-reveal";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./gallery.style.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Gallery = () => {
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
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="swiper__img" src={image1} alt="zdjęcie" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="swiper__img" src={image2} alt="zdjęcie" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="swiper__img" src={image6} alt="zdjęcie" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="swiper__img" src={image4} alt="zdjęcie" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="swiper__img" src={image5} alt="zdjęcie" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="swiper__img" src={image3} alt="zdjęcie" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="swiper__img" src={image7} alt="zdjęcie" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="swiper__img" src={image8} alt="zdjęcie" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="swiper__img" src={image9} alt="zdjęcie" />
          </SwiperSlide>
        </Swiper>
      </Fade>
    </>
  );
};

export default Gallery;