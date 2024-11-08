import React from 'react';
import Link from 'next/link';


const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Brand</div>
        <div className="hidden md:flex space-x-4">
          <Link href="#" className="text-white hover:text-gray-300">Home</Link>
          <Link href="#" className="text-white hover:text-gray-300">About</Link>
          <Link href="/shorten" className="text-white hover:text-gray-300">Shorten Link</Link>
          <Link href="#" className="text-white hover:text-gray-300">Contact Us</Link>
          <Link href="/shorten" className="text-white hover:text-gray-300">Try Now</Link>
          <Link href="#" className="text-white hover:text-gray-300">Github</Link>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;