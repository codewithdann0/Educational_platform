import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-white text-black py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">eduPlat</h1>
        
        <div className="flex flex-col items-center mb-6">
          <form className="flex space-x-2">
            <input
              type="email"
              placeholder="Email "
              className="p-2 rounded border focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button className="bg-white text-black p-2 rounded border-blue-700 hover:bg-blue-700 transition duration-400">
              Subscribe to Our Newsletter
            </button>
          </form>
        </div>
        
        <div className="flex justify-center space-x-4">
          <a href="https://www.facebook.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-8 h-8 text-blue-800 hover:text-blue-500 transition duration-200" />
          </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="w-8 h-8 text-blue-800 hover:text-blue-500 transition duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-8 h-8 text-blue-800 hover:text-blue-500 transition duration-200" />
          </a>
          <a href="https://www.twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="w-8 h-8 text-blue-800 hover:text-blue-500 transition duration-200" />
          </a>
          <a href="https://www.youtube.com/@techwithdann"  target="_blank" rel="noopener noreferrer">
          <FaYoutube className="w-8 h-8 text-red-600 hover:text-red-500 transition duration-200" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
