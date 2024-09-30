'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [username] = useState("Daniel Tigistu");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-udacity-blue   
 shadow-md fixed top-0 left-0 right-0 z-10 w-full mb-7">
      <div className="flex justify-between items-center p-4 max-w-screen-xl mx-auto">
        {/* Logo on the left */}
        <Link href="/" className="text-2xl font-bold black-white">
          EduPlatform
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden" onClick={toggleMobileMenu}>
          <button className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"   

            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>   


        {/* Navigation Links (hidden on mobile) */}
        <div className={`md:flex md:flex-row md:space-x-8 hidden md:static bg-white w-full md:w-auto transition-all duration-300 ${
          isMobileMenuOpen ? 'top-12' : '-top-40'
        }`}>
          <Link href="/" className="block text-gray-700 hover:text-green-500 py-3 px-4 transition duration-200 ease-in-out">
            Home
          </Link>
          <Link href="/catalog" className="block text-gray-700 hover:text-green-500 py-3 px-4 transition duration-200 ease-in-out">
            Catalog
          </Link>
        </div>

        {/* Search Bar and User Information (hidden on mobile) */}
        <div className="md:flex items-center space-x-4 ml-auto">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200 ease-in-out"
            />
          </div>
          <div className="flex items-center">
            <FaUserCircle className="text-gray-700 w-8 h-8" />
            <span className="ml-2 text-gray-700">{username}</span>
          </div>
        </div>
      </div>
      <hr className="mx-auto w-11/12" /> {/* Centered line under the navbar */}
    </nav>
  );
};

export default Navbar;