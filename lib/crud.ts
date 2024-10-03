// lib/crud.ts
import { db } from './firebase';
import { collection, addDoc, doc, updateDoc, deleteDoc, getDocs } from 'firebase/firestore';

// Create a new course
export const createCourse = async (courseData: any) => {
  const docRef = await addDoc(collection(db, 'courses'), courseData);
  return docRef.id;
};

// Read courses
export const getCourses = async () => {
  const querySnapshot = await getDocs(collection(db, 'courses'));
  const courses = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return courses;
};

// Update a course
export const updateCourse = async (courseId: string, updatedData: any) => {
  const courseRef = doc(db, 'courses', courseId);
  await updateDoc(courseRef, updatedData);
};

// Delete a course
export const deleteCourse = async (courseId: string) => {
  const courseRef = doc(db, 'courses', courseId);
  await deleteDoc(courseRef);
};
