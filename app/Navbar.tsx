'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };
  return (
    <nav className="bg-white h-16 p-4 fixed w-screen shadow"> {/* Height and shadow */}
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo on the left with space added between EduPlat and Home */}
        <Link href="/" className="text-3xl font-bold text-gray-800 hover:text-green-500 transition duration-200 mr-10">
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
        <div className={`md:flex md:flex-row md:space-x-8 hidden md:static w-full md:w-auto transition-all duration-300 ${isMobileMenuOpen ? 'top-12' : '-top-40'}`}>
          <Link href="/" className="block text-gray-800 hover:text-green-500 py-3 px-4 transition duration-200 ease-in-out text-lg">
            Home
          </Link>
          <Link href="/catalog" className="block text-gray-800 hover:text-green-500 py-3 px-4 transition duration-200 ease-in-out text-lg">
            Catalog
          </Link>
        </div>

        {/* User Information and Login Button (hidden on mobile) */}
        <div className="md:flex items-center space-x-4 ml-auto mr-2"> {/* Added mr-2 to reduce the right gap */}
          {/* Login Button */}
          <Link href="/signup" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200 ease-in-out">
            Login
          </Link>

          {/* Profile Icon */}
          <div className="relative">
            <button onClick={toggleDropdown} className="text-gray-800 hover:text-green-500 transition duration-200">
              <FaUserCircle className="h-8 w-8" /> {/* Circular profile icon */}
            </button>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                <div className="py-2">
                  <p className="px-4 py-2 text-gray-800">User Information</p>
                  <hr className="border-gray-200" />
                  <Link href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-200">
                    View Profile
                  </Link>
                  <Link href="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-200">
                    Settings
                  </Link>
                  <Link href="/logout" className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition duration-200">
                    Logout
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
