// app/courses/page.tsx
'use client'
import React, { useState } from 'react';
import Navbar from '../Navbar';

const courses = [
  {
    id: 1,
    name: 'Data Analyst',
    imageUrl: 'https://www.udacity.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ftlr8oxjg%2Fproduction%2Ffdf314615dab9455b1e163ae8ab698abde8453c8-1456x816.png',
  },
  {
    id: 2,
    name: 'Course 2',
    imageUrl: 'https://via.placeholder.com/200x400',
  },
  {
    id: 3,
    name: 'Course 3',
    imageUrl: 'https://via.placeholder.com/200x400',
  },
  {
    id: 4,
    name: 'Course 4',
    imageUrl: 'https://via.placeholder.com/200x400',
  },
  {
    id: 5,
    name: 'Course 5',
    imageUrl: 'https://via.placeholder.com/200x400',
  },
  {
    id: 6,
    name: 'Course 6',
    imageUrl: 'https://via.placeholder.com/200x400',
  },
  {
    id: 7,
    name: 'Course 7',
    imageUrl: 'https://via.placeholder.com/200x400',
  },
  {
    id: 8,
    name: 'Harvard CS50’s Artificial Intelligence with Python – Full University Course', // New course for the YouTube video
    videoId: '5NgNicANyqM', // YouTube video ID
    thumbnailUrl: 'https://img.youtube.com/vi/5NgNicANyqM/hqdefault.jpg', // Thumbnail URL
  },
];

const CoursesPage = () => {
  const [isPlaying, setIsPlaying] = useState(false); // State to track video playing status

  const handlePlayClick = () => {
    setIsPlaying(true); // Set playing state to true when the play button is clicked
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center mt-20">Course Recommended For You</h1>
        <div className="flex flex-wrap justify-center gap-4"> {/* Flex container with gap for spacing */}
          {courses.map((course) => (
            <div key={course.id} className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 w-56"> {/* Set a fixed width for cards */}
              <img 
                src={course.imageUrl || course.thumbnailUrl} // Use the course image or thumbnail
                alt={course.name} 
                className="h-full w-full object-fill mb-4 rounded" // Set height to 600px
              />
              <h2 className="text-lg font-semibold text-center">{course.name}</h2>
            </div>
          ))}
        </div>

        {/* YouTube Course Section */}
        <div className="flex flex-col items-center mt-10">
          <h2 className="text-xl font-semibold mb-4">Watch Our Featured Course</h2>
          <div className="relative">
            {isPlaying ? (
              <div className="responsive-iframe mb-8">
                <iframe
                  width="100%"
                  height="500px"
                  src={`https://www.youtube.com/embed/${courses[7].videoId}?autoplay=1`} // Autoplay the video
                  title="Featured Course Video"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <a onClick={handlePlayClick} className="cursor-pointer">
                <img 
                  src={courses[7].thumbnailUrl} 
                  alt={`${courses[7].name} Thumbnail`} 
                  className="rounded-lg mb-4" // Thumbnail image
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-red-800 text-white rounded-full p-4 hover:bg-blue-600 transition duration-200">
                    ▶ {/* Play Icon */}
                  </button>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
