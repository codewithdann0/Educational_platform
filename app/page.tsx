import Navbar from './components/navbar'; // Ensure correct casing for the component name
import Link from 'next/link'; // Correct the import for Link from Next.js
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import the desired icons

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='bg-black-700 text-white text-center py-4'>
        ✨ Welcome to your new Dashboard ✨ What's New?
      </div>
      <div className="bg-white p-6">
        {/* Hero Section */}
        <div className="py-20 text-center">
          <h1 className="text-5xl font-bold text-gray-800">Unlock Your Potential</h1>
          <p className="mt-4 text-lg text-gray-600">
            Join thousands of learners and start your journey in the world of online education.
          </p>
          <Link href="/courses" className="mt-6 inline-block bg-blue-500 text-white font-semibold py-2 px-6 rounded hover:bg-green-600 transition duration-200">
            Explore Courses
          </Link>
        </div>
        {/* Other content goes here... */}
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="mb-4">© 2024 Your Educational Platform. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4">
            <Link href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-white transition duration-200">
              <FaFacebookF size={24} />
            </Link>
            <Link href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-white transition duration-200">
              <FaTwitter size={24} />
            </Link>
            <Link href="https://instagram.com" target="_blank" className="text-gray-400 hover:text-white transition duration-200">
              <FaInstagram size={24} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-white transition duration-200">
              <FaLinkedin size={24} />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
