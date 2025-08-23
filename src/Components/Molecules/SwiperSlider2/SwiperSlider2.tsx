import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function SwiperSlider2() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/assets/image/melon-slice.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/image/grow-bigger.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/image/melon-transform.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/image/grow-bigger.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
