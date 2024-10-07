// app/courses/page.tsx
'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase'; // Firebase Firestore config

interface Course {
  id: string;
  name: string;
  videoId: string;
  thumbnailUrl: string;
}

// Sample data until the database works (fallback data)
const sampleCourses: Course[] = [
  {
    id: '1',
    name: 'Harvard CS50’s Artificial Intelligence with Python – Full University Course',
    videoId: '5NgNicANyqM',
    thumbnailUrl: 'https://img.youtube.com/vi/5NgNicANyqM/hqdefault.jpg',
  },
  {
    id: '2',
    name: 'Harvard CS50’s Web Programming with Python and JavaScript',
    videoId: 'sTGa44pzhLI',
    thumbnailUrl: 'https://img.youtube.com/vi/sTGa44pzhLI/hqdefault.jpg',
  },
];

const CoursesPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]); // State to store the fetched courses
  const [isLoading, setIsLoading] = useState(true); // State for loading status
  const [isPlaying, setIsPlaying] = useState(false); // State to track video playing status

  // Function to add sample data to Firebase if collection is empty
  const addSampleCoursesToFirestore = async () => {
    try {
      const coursesRef = collection(db, 'courses');
      for (const course of sampleCourses) {
        await addDoc(coursesRef, course);
      }
      console.log('Sample courses added to Firestore');
    } catch (error) {
      console.error('Error adding sample courses:', error);
    }
  };

  // Fetch courses from Firestore
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'courses'));
        if (querySnapshot.empty) {
          // If no courses found in Firestore, add the sample data
          await addSampleCoursesToFirestore();
        } else {
          const fetchedCourses = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          })) as Course[];
          setCourses(fetchedCourses); // Update state with fetched courses
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
        // In case of error, fallback to the sample courses
        setCourses(sampleCourses);
      } finally {
        setIsLoading(false); // Stop loading state
      }
    };

    fetchCourses(); // Fetch courses on component mount
  }, []);

  const handlePlayClick = () => {
    setIsPlaying(true); // Set playing state to true when the play button is clicked
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center mt-20">Course Recommended For You</h1>

        {/* Loading state */}
        {isLoading ? (
          <p>Loading courses...</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-4">
            {courses.map((course) => (
              <div key={course.id} className="flex flex-col items-center bg-white shadow-lg rounded-lg p-4 w-56">
                <img
                  src={course.thumbnailUrl}
                  alt={course.name}
                  className="h-full w-full object-fill mb-4 rounded"
                />
                <h2 className="text-lg font-semibold text-center">{course.name}</h2>
              </div>
            ))}
          </div>
        )}

        {/* Featured Course Section */}
        {courses.length > 0 && (
          <div className="flex flex-col items-center mt-10">
            <h2 className="text-xl font-semibold mb-4">Watch Our Featured Course</h2>
            <div className="relative">
              {isPlaying ? (
                <div className="responsive-iframe mb-8">
                  <iframe
                    width="100%"
                    height="500px"
                    src={`https://www.youtube.com/embed/${courses[0].videoId}?autoplay=1`}
                    title="Featured Course Video"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <a onClick={handlePlayClick} className="cursor-pointer">
                  <img
                    src={courses[0].thumbnailUrl}
                    alt={`${courses[0].name} Thumbnail`}
                    className="rounded-lg mb-4"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-red-800 text-white rounded-full p-4 hover:bg-blue-600 transition duration-200">
                      ▶
                    </button>
                  </div>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
