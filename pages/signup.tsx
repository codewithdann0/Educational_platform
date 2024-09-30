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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 w-full max-w-md">
        <div className="flex justify-between mb-6">
          {/* Sign In Link */}
          <Link href="/signin" className="flex-1 text-3xl text-center px-4 py-2 rounded-lg bg-gray-200 text-gray-500">
              Sign In
            
          </Link>

          {/* Sign Up Link */}
          <Link href="/signup" className="flex-1 text-3xl font-bold text-center px-4 py-2 rounded-lg">
              Sign Up
          </Link>
        </div>

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

        <p className="mt-4 text-center text-gray-600">By clicking "Sign up," you agree to our Terms of Use and our Privacy Policy.</p>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{' '}
          <Link href="/signin" className="text-green-500 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
