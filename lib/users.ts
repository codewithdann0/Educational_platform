// lib/users.ts
import { db } from './firebase'; // Import Firestore instance
import { collection, addDoc } from 'firebase/firestore';

export const addUser = async (userData: {
  uid: string; // User's unique ID from authentication
  fullName: string;
  email: string;
  phone: string;
  profilePictureUrl?: string; // Optional profile picture URL
}) => {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      ...userData,
      createdAt: new Date().toISOString(), // Automatically set createdAt timestamp
    });
    console.log('User document added with ID: ', docRef.id);
    return docRef.id; // Return the document ID if needed
  } catch (error) {
    console.error('Error adding user document: ', error);
    throw new Error('Failed to add user document');
  }
};
