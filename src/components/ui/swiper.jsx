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
      <SwiperSlide><img src='https://cdn.shopify.com/s/files/1/0070/7032/articles/homepage-design.png?v=1727452539' className='w-full  rounded-lg' /></SwiperSlide>
      <SwiperSlide><img src='https://cdn.shopify.com/s/files/1/0070/7032/articles/homepage-design.png?v=1727452539' className='w-full rounded-lg' /></SwiperSlide>
      <SwiperSlide><img src='https://cdn.shopify.com/s/files/1/0070/7032/articles/how_20to_20start_20an_20online_20store_240b2148-d7a8-43dc-aad2-0bd731ee7ef6.png' className='w-full rounded-lg' /></SwiperSlide>
      <SwiperSlide><img src='https://cdn.shopify.com/s/files/1/0070/7032/articles/how_20to_20create_20a_20facebook_20shop.png?v=1729263391' className='w-full rounded-lg' /></SwiperSlide>
    </SwiperCore>

  );
}
