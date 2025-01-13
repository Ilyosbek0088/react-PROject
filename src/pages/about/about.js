import React from 'react'
import SwiperComponent from '../../components/ui/swiper'
import 'swiper/css';
import 'swiper/css/pagination';
import { PiDiscordLogoDuotone, PiGithubLogoDuotone, PiInstagramLogoDuotone } from "react-icons/pi";

import '../../index.css'



const About = () => {
  return (
    <div className='container mx-8 mt-10'>
      <div className='flex gap-4'>
      <div className='w-[50%] border-solid border-[5px] rounded-xl border-black'><SwiperComponent/></div>
      <div className='w-[50%] border-solid border-[5px] rounded-lg border-black flex-col items-center justify-center ' >
      <div className='text-[50px] w-full text-center'>About Us</div>
      <div className='w-100 flex justify-center my-4'><div className='w-96'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, quaerat.</div></div>
      <div className='w-100 flex justify-center'><div className=' w-9/12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, eligendi culpa facere repudiandae modi voluptatibus commodi maiores tempora fugiat quasi. Eligendi fugit facilis, dolorum cum architecto vitae officia autem eos magni numquam nisi et atque dignissimos aliquid modi, dolores voluptate esse! Obcaecati iste est deleniti veniam reiciendis officia ab ullam.</div></div> 
    
       <div className=' flex justify-center mt-4'>
        <button className=' bg-[white] text-black p-2 flex justify-center items-center gap-x-2 cursor-pointer rounded-md border-[3px] border-solid border-black '>Read More</button></div>
     <div className='flex gap-3 my-4  flex justify-center'>
      <div><button icon={<PiInstagramLogoDuotone/>} className='btns w-8 h-8 text-[black] rounded-md border-[3px] border-solid border-black '><PiInstagramLogoDuotone/></button></div>
      <div><button icon={<PiGithubLogoDuotone />} className='btns w-8 h-8 text-[black] rounded-md border-[3px] border-solid border-black '><PiGithubLogoDuotone /></button></div>
      <div><button icon={<PiDiscordLogoDuotone />} className='btns w-8 h-8 text-[black] rounded-md border-[3px] border-solid border-black '><PiDiscordLogoDuotone /></button></div>
 
      </div>
      
      </div>
      </div>
    </div>
  )
}

export default About