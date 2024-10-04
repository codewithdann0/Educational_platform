'use client';

import React, { useState, useEffect } from 'react';
import { db } from '@/lib/firebase'; // Import Firestore
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore'; 
import { useRouter } from 'next/navigation'; // Use the correct import for Next.js

// Admin Page Component
const AdminPage = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [formData, setFormData] = useState({ 
    name: '', 
    imageUrl: '', 
    videoUrl: '', // Add video URL field
    thumbnailUrl: '' // Add thumbnail URL field
  });
  const [editCourseId, setEditCourseId] = useState<string | null>(null);

  // Fetch courses from Firestore
  const fetchCourses = async () => {
    const coursesCollection = collection(db, 'courses');
    const courseSnapshot = await getDocs(coursesCollection);
    const coursesList = courseSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setCourses(coursesList);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  // Handle form input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (add or update)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editCourseId) {
      // Update existing course
      const courseDoc = doc(db, 'courses', editCourseId);
      await updateDoc(courseDoc, formData);
      setEditCourseId(null);
    } else {
      // Add new course
      await addDoc(collection(db, 'courses'), {
        ...formData, // Spread the formData to include all fields
        createdAt: new Date(), // Optional: Add created timestamp
      });
    }

    setFormData({ name: '', imageUrl: '', videoUrl: '', thumbnailUrl: '' }); // Reset form data
    fetchCourses(); // Refresh the list after adding/updating
  };

  // Handle edit action
  const handleEdit = (courseId: string) => {
    const course = courses.find((c) => c.id === courseId);
    if (course) {
      setFormData({ 
        name: course.name, 
        imageUrl: course.imageUrl, 
        videoUrl: course.videoUrl, // Set video URL
        thumbnailUrl: course.thumbnailUrl // Set thumbnail URL
      });
      setEditCourseId(courseId);
    }
  };

  // Handle delete action
  const handleDelete = async (courseId: string) => {
    await deleteDoc(doc(db, 'courses', courseId));
    fetchCourses(); // Refresh the list after deletion
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Admin - Manage Courses</h1>

      {/* Form to add or edit course */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label className="block text-sm font-medium">Course Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Video URL</label>
          <input
            type="text"
            name="videoUrl"
            value={formData.videoUrl}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Thumbnail URL</label>
          <input
            type="text"
            name="thumbnailUrl"
            value={formData.thumbnailUrl}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded w-full"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          {editCourseId ? 'Update Course' : 'Add Course'}
        </button>
      </form>

      {/* List of courses in a card layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {courses.map((course) => (
          <div key={course.id} className="border border-gray-300 rounded-lg overflow-hidden shadow-lg">
            <img src={course.thumbnailUrl} alt={course.name} className="h-40 w-full object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{course.name}</h2>
              <div className="mt-2">
                <a href={course.videoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  Watch Video
                </a>
              </div>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => handleEdit(course.id)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(course.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
