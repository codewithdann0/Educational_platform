// lib/auth.ts
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Type assertion for errors
type AuthError = Error & { code?: string; message?: string };

export const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    const firebaseError = error as AuthError; // Type assertion
    throw new Error(firebaseError.message || "An unknown error occurred.");
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    const firebaseError = error as AuthError; // Type assertion
    throw new Error(firebaseError.message || "An unknown error occurred.");
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    const firebaseError = error as AuthError; // Type assertion
    throw new Error(firebaseError.message || "An unknown error occurred.");
  }
};
