import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  image53,
  image54,
  image48,
  image58,
  image3,
  image5,
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
        <div className="gallery__container">
          <h2 className="gallery__title fancy">
            Świadczymy usługi na terenie Poznania i okolic 7 dni w tygodniu
          </h2>
          <br />
          <br />
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
              <img className="swiper__img" src={image53} alt="zdjęcie" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper__img" src={image54} alt="zdjęcie" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper__img" src={image58} alt="zdjęcie" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="swiper__img" src={image48} alt="zdjęcie" />
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
        </div>
      </Fade>
    </>
  );
};

export default Gallery;
