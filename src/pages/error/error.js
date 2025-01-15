import React from 'react';

const BuyPremium = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Buy a Premium
        </h1>
        <p className="text-center text-gray-600 mb-6">
          {/* Upgrade to premium to unlock exclusive features and enjoy an ad-free experience! */}
          If you want to buy something from our store buy a premium for just $9.99 or write to our Administrator for free trail
        </p>
        <div className="flex justify-center items-center space-x-4 mb-6">
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-700">Monthly Plan</p>
            <p className="text-2xl font-bold text-blue-600">$9.99</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-700">Yearly Plan</p>
            <p className="text-2xl font-bold text-blue-600">$99.99</p>
          </div>
        </div>
       <a href='https://t.me/PreStoreBuy_bot'> <button className="w-full my-4 px-4 py-2 text-lg font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Buy Premium
        </button></a>
        <a href='https://shattereddisk.github.io/rickroll/rickroll.mp4'><button className="w-full px-4 py-2 text-lg font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Administrator
        </button></a>
        <p className="text-sm text-center text-gray-500 mt-4">
          Already a premium user?{' '}
          <a href="../login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default BuyPremium;
