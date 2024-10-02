// app/courses/page.tsx
import React from 'react';
import Navbar from '../Navbar';

const courses = [
  {
    id: 1,
    name: 'Data Analyst',
    imageUrl: 'https://www.udacity.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ftlr8oxjg%2Fproduction%2Ffdf314615dab9455b1e163ae8ab698abde8453c8-1456x816.png&w=640&q=100', // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Course 2',
    imageUrl: 'https://via.placeholder.com/200x400', // Replace with actual image URL
  },
  {
    id: 3,
    name: 'Course 3',
    imageUrl: 'https://via.placeholder.com/200x400', // Replace with actual image URL
  },
  {
    id: 4,
    name: 'Course 4',
    imageUrl: 'https://via.placeholder.com/200x400', // Replace with actual image URL
  },
  {
    id: 5,
    name: 'Course 5',
    imageUrl: 'https://via.placeholder.com/200x400', // Replace with actual image URL
  },
  {
    id: 6,
    name: 'Course 6',
    imageUrl: 'https://via.placeholder.com/200x400', // Replace with actual image URL
  },
  {
    id: 7,
    name: 'Course 6',
    imageUrl: 'https://via.placeholder.com/200x400', // Replace with actual image URL
  },
];

const CoursesPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Course Recommanded For You</h1>
        <div className="flex flex-wrap justify-center gap-4"> {/* Flex container with gap for spacing */}
          {courses.map((course) => (
            <div key={course.id} className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 w-56"> {/* Set a fixed width for cards */}
              <img 
                src={course.imageUrl} 
                alt={course.name} 
                className="h-full w-full object-fill mb-4 rounded" // Set height to 600px
              />
              <h2 className="text-lg font-semibold text-center">{course.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
