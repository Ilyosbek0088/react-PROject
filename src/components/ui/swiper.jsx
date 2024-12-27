import React from 'react';
// Import Swiper React components
import { Swiper as SwiperCore, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css'; // Проверьте наличие этого файла

// Import required modules
import { Pagination } from 'swiper/modules';

// Компонент с уникальным именем
export default function SwiperComponent() {
  return (
    <SwiperCore pagination={true} modules={[Pagination]} className="mySwiper">
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </SwiperCore>
  );
}
