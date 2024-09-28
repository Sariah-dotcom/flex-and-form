import React, { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";

export default function Header() {
  // State to control menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className='flex px-6 py-8 bg-light-pink justify-between items-center lg:px-36'>
        <img src="/logo.png" alt="" className='h-12 lg:h-20' />

        {/* Desktop Menu (md and above) */}
        <div className="nav-links flex gap-20 font-lato font-bold text-purple hidden md:flex">
          <a href="#about">About</a>
          <a href="#team">Our Team</a>
          <a href="#app">App</a>
        </div>

        {/* Menu Icon for small screens */}
        {!isMenuOpen && (
          <IoMenu 
            className='block md:hidden h-8 w-8 text-dark-pink cursor-pointer' 
            onClick={toggleMenu}
          />
        )}
      </nav>

      {/* Sliding Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transition-transform transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}>
        
        {/* Close Icon */}
        <div className="flex justify-end p-4">
          <IoClose 
            className="h-16 w-16 pt-7 text-dark-pink cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        {/* Mobile Menu Links */}
        <div className="flex flex-col gap-12 p-6 font-lato font-bold text-purple text-xl">
          <a href="#about" className="hover:text-dark-pink" onClick={toggleMenu}>About</a>
          <a href="#team" className="hover:text-dark-pink" onClick={toggleMenu}>Our Team</a>
          <a href="#app" className="hover:text-dark-pink" onClick={toggleMenu}>App</a>
        </div>
      </div>
    </div>
  );
}
