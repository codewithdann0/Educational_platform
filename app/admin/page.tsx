'use client';

import React, { useState, useEffect } from 'react';
import { db } from '@/lib/firebase'; // Import Firestore
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore'; 
import { useRouter } from 'next/navigation'; // Use the correct import for Next.js

// Admin Page Component
const AdminPage = () => {
  const [courses, setCourses] = useState<any[]>([]);
  const [formData, setFormData] = useState({ name: '', imageUrl: '' });
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
      await addDoc(collection(db, 'courses'), formData);
    }

    setFormData({ name: '', imageUrl: '' });
    fetchCourses(); // Refresh the list after adding/updating
  };

  // Handle edit action
  const handleEdit = (courseId: string) => {
    const course = courses.find((c) => c.id === courseId);
    if (course) {
      setFormData({ name: course.name, imageUrl: course.imageUrl });
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
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          {editCourseId ? 'Update Course' : 'Add Course'}
        </button>
      </form>

      {/* List of courses */}
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-6 py-2">Name</th>
            <th className="px-6 py-2">Image</th>
            <th className="px-6 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td className="px-6 py-4">{course.name}</td>
              <td className="px-6 py-4">
                <img src={course.imageUrl} alt={course.name} className="h-12 w-12 object-cover" />
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => handleEdit(course.id)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(course.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;