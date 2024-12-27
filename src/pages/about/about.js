import React from 'react'
import SwiperComponent from '../../components/ui/swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
// import { Button } from 'bootstrap';
import Button from '../../components/ui/button';


const About = () => {
  return (
    <div className='container'>
      <div className=''>
      <div><SwiperComponent/></div>
      <div>
      <div>About Us</div>
      <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, quaerat.</div>
      <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, eligendi culpa facere repudiandae modi voluptatibus commodi maiores tempora fugiat quasi. Eligendi fugit facilis, dolorum cum architecto vitae officia autem eos magni numquam nisi et atque dignissimos aliquid modi, dolores voluptate esse! Obcaecati iste est deleniti veniam reiciendis officia ab ullam.</div>
      <div><button className='btn bg-[black] text-black p-2 flex justify-center items-center gap-x-2 cursor-pointer rounded-md border-[3px] border-solid border-white hover:border-white hover:bg-[white] hover:text-black transition-all'>Read More</button></div>
      <div><Button></Button></div>
      </div>
      </div>
    </div>
  )
}

export default About