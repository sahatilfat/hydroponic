import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './slider.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import Card from '../Card/Card';
import CardWithDescription from '../CardWithDescription/CardWithDescription';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
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

        {/* <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
