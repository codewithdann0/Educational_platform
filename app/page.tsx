import Footer from './Footer'
import Navbar from './Navbar'; // Ensure correct casing for the component name
import Link from 'next/link'; // Correct the import for Link from Next.js
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import the desired icons
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='bg-black-700 text-white text-center py-4 '>

        <h1 className='mt-20 text-black'>✨ Welcome to your new Dashboard ✨ What's New?</h1>
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

      <Footer/>
    </div>
  );
}
