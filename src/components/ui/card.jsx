import React, { useState } from 'react'

//
import { Rating } from 'react-simple-star-rating';

const Card = ({data}) => {
    const [rating, setRating] = useState(0)

    // Catch Rating value
    const handleRating = (rate) => {
      setRating(rate)
  
    }
    
  
  return (
    <div class="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
    <section
        class="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
            {data.length !== 0 ? data.map((value,index)=>(
        <section class="cart p-5 py-10 bg-black border-[3px] border-solid border-white text-center transform duration-500 hover:-translate-y-2 cursor-pointer rounded-xl ">
            <img src="https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1" alt="" />
            <div class="flex justify-center">
                <Rating initialValue={value.rating.rate} readonly={true}   onClick={handleRating} />
            </div>
            <h1 class="text-3xl my-5 line-clamp-3 text-black">{value.title}</h1>
            <p class="mb-5 line-clamp-3">{value.description}</p>
            <h2 class="font-semibold mb-5">${value.price}</h2>
            <button class=" bg-[black] text-white p-2 cursor-pointer rounded-md border-[3px] border-solid border-white hover:bg-[white] hover:text-black transition-all  ${active ? 'bg-black text-white' : 'bg-white text-black'}">Add To Cart</button>
        </section>
            )) : "No Data"
        }

    </section>
</div>
  )
}

export default Card