'use client';
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
    <nav className="bg-white shadow fixed top-0 left-0 right-0 z-10 w-full mb-7">
      <div className="flex justify-between items-center p-4 max-w-screen-xl mx-auto">
        {/* Logo on the left */}
        <Link href="/" className="text-2xl font-bold text-green-500 mr-20"> {/* Increased margin-right */}
          EduPlatform
        </Link>

        {/* Navigation Links */}
        <div className={`flex-col md:flex md:flex-row md:space-x-8 absolute md:static bg-white w-full md:w-auto ${isMobileMenuOpen ? 'top-12' : '-top-40'} transition-all duration-300`}>
          <div className="flex flex-col md:flex-row md:space-x-8"> {/* Added md:space-x-8 for spacing */}
            <Link href="/" className="block text-gray-700 hover:text-green-500 py-3 px-4">
              Home
            </Link>
            <Link href="/catalog" className="block text-gray-700 hover:text-green-500 py-3 px-4">
              Catalog
            </Link>
          </div>
        </div>

        {/* Search Bar and User Information */}
        <div className="flex items-center space-x-4 ml-auto">
          <div className="relative hidden md:block">
            <input 
              type="text" 
              placeholder="Search..." 
              className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex items-center">
            <FaUserCircle className="text-gray-700 w-8 h-8" />
          </div>
        </div>
      </div>
      <hr />
    </nav>
  );
};

export default Navbar;
