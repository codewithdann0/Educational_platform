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
    <nav   className="bg-white h-18 p-4  fixed w-screen"> {/* Increased height */}
      <div className="container mx-auto flex items-center justify-between ">
        {/* Logo on the left */}
        <Link href="/" className="text-3xl font-bold text-gray-800 hover:text-green-500 transition duration-200">
          eduPlat
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden" onClick={toggleMobileMenu}>
          <button className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-800"
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
        <div className={`md:flex md:flex-row md:space-x-8 hidden md:static w-full md:w-auto transition-all duration-300 ${
          isMobileMenuOpen ? 'top-12' : '-top-40'
        }`}>
          <Link href="/" className="block text-gray-800 hover:text-green-500 py-3 px-4 transition duration-200 ease-in-out text-lg">
            Home
          </Link>
          <Link href="/catalog" className="block text-gray-800 hover:text-green-500 py-3 px-4 transition duration-200 ease-in-out text-lg">
            Catalog
          </Link>
        </div>

        {/* Search Bar and User Information (hidden on mobile) */}
        <div className="md:flex items-center space-x-4 ml-auto">
          <div className="relative hidden md:block">
             <div className="hidden md:block">
            <Link href="/signin" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200 ease-in-out">
              Login
            </Link>
          </div>
          </div>

          {/* Login Button */}
         
        </div>
      </div>
      <hr className="mx-auto  border-gray-300" /> {/* Centered line under the navbar */}
    </nav>
  );
};

export default Navbar;
