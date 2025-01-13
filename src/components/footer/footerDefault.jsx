import React from 'react';

const FooterDefault = () => {
  return (
    <footer className="bg-whitesmoke text-black py-6 my-10">
      <div className="container mx-auto text-center">
        <p className="text-lg font-semibold text-black">Online-shop 2025 by Sweetie</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-2xl hover:text-pink-500"></i>
          </a>
          <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-discord text-2xl hover:text-blue-500"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter text-2xl hover:text-blue-400"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterDefault;
