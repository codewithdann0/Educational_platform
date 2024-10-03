// lib/auth.ts
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { db } from './firebase'; // Import the Firestore instance
import { doc, setDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage'; // Import Firebase Storage

// Type assertion for errors
type AuthError = Error & { code?: string; message?: string };

const storage = getStorage();

export const signUp = async (
  email: string,
  password: string,
  fullName: string,
  phone: string,
  profilePicture: File | null
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Upload the profile picture if provided
    let profilePictureUrl = '';
    if (profilePicture) {
      const storageRef = ref(storage, `profile_pictures/${user.uid}`);
      await uploadBytes(storageRef, profilePicture); // Upload the file
      profilePictureUrl = `profile_pictures/${user.uid}`; // Set the profile picture URL
    }

    // Create a user document in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      email,
      fullName,
      phone,
      profilePicture: profilePictureUrl, // Store the URL of the profile picture
      createdAt: new Date(), // Optional: Add timestamp
      role: 'student', // Optional: Default role
    });

    // Optionally, create an initial course document (commented out; you can uncomment it later)
    
    await setDoc(doc(db, 'courses', user.uid), {
      courseId: user.uid, // or auto-generated ID logic
      title: 'Introduction to Programming', // Default course title
      description: 'Learn the basics of programming using JavaScript.',
      instructorId: user.uid, // Assuming user is the instructor
      videoUrl: 'https://www.youtube.com/watch?v=example', // Default video URL
      thumbnailUrl: '', // You can set this later if needed
      createdAt: new Date(), // Timestamp for course creation
    });
    

    return user;
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
