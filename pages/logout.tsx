// pages/logout.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { signOutUser } from '../lib/auth'; // Adjust the path according to your project structure

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    const logout = async () => {
      try {
        await signOutUser(); // Call your sign out function
        router.push('/signin'); // Redirect to the home page or any other page
      } catch (error) {
        console.error("Logout failed:", error);
      }
    };

    logout(); // Invoke the logout function
  }, [router]);

  return (
    <div>
      <h1>Logging out...</h1>
    </div>
  );
};

export default Logout;
