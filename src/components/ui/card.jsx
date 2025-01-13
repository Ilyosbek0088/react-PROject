import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';

const Card = ({ data }) => {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleNavigate = (url) => {
    navigate(`/product/${url}`);
  };

  return (
    <div className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0  ">
      <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start">
        {data.length !== 0 ? (
          data.map((value, index) => (
            <section
              key={index}
              className=" border-[2px] border-solid border-red-100 rounded-lg p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer "
            >
              {/* Image Styling */}
              <div className="relative w-full h-64 overflow-hidden rounded-lg border-[2px] border-solid border-red-100 bg-white flex items-center justify-center">
                <img
                  src={value.image}
                  alt={value.title}
                  className="object-cover w-36 "
                />
              </div>

              <div className="flex justify-center mt-4">
                <Rating
                  initialValue={value.rating.rate}
                  readonly={true}
                  onClick={handleRating}
                />
              </div>

              <h1 className="text-3xl my-5 line-clamp-3">{value.title}</h1>
              <p className="mb-5 line-clamp-3">{value.description}</p>
              <h2 className="font-semibold mb-5">${value.price}</h2>
              <button
                className="p-2 px-6 bg-white border-solid border-black border-[3px] text-black rounded-md hover:bg-blue-100"
                onClick={() => handleNavigate(value.id)}
              >
                Add To Cart
              </button>
            </section>
          ))
        ) : (
          'No Data'
        )}
      </section>
    </div>
  );
};

export default Card;
