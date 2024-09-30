// pages/signup.tsx
import { useState } from 'react';
import { signUp } from '../lib/auth';
import Link from 'next/link';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      await signUp(email, password);
      // Redirect or perform other actions after successful sign-up
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unexpected error occurred.');
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">Sign Up</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSignUp} className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-all duration-300 font-semibold"
          >
            Sign Up
          </button>
        </form>

        {/* Inline Text and Link */}
        <div className="text-center mt-4 text-gray-600 text-xs inline-flex space-x-1 justify-center">
          <p>Already have an account?</p>
          <Link href="/signin"
             className="text-green-500 hover:text-green-600 font-semibold">Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
