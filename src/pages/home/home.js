// home.js
import React from 'react';
import Products from '../products/products'
const Home = () => {
  return <div className='contain'>
    <div className='home-box w-100 h-screen bg-no-repeat bg-cover'>
      <div className='px-44 w-full h-full flex justify-center items-start align-center flex-col'>

  <div className='w-full rounded-lg scale-120 p-4 backdrop-blur-md border-[3px] border-solid border-cyan-600'>
        <div className='w-80'>
        <h1 className='title text-6xl text-cyan-500'>Winter Season</h1>
        <div className=' bg-cyan-500 w-full h-0.5'></div>
        <p className=' title1 text-5xl text-transparent stroke'>Black Friday</p></div>
      </div>
 </div>   
    </div>
<Products/>
  </div>;
};

export default Home;