"use client";
import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ email, password });
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url('/images/background.png')`, // Replace with your actual image path
      }}
    >
      <div className="backdrop-blur-sm bg-black/60 min-h-screen">
        
        {/* Form Container */}
        <div className="container mx-auto px-4 py-16 flex justify-center">
          <div className="bg-white/60 backdrop-blur-lg p-8 rounded-xl border border-white/20 shadow-lg max-w-md w-full">
            <h2 className="text-center text-gray-800 text-xl font-bold mb-6">Welcome Back</h2>
            
            <form onSubmit={onSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Enter Your Email *
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email Here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Enter Your Password *
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Type Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <button
                  className="bg-[#1D3653] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="submit"
                >
                  Continue
                </button>
              </div>
              
              <div className="text-center text-gray-500 text-xs mt-4">
                By proceeding you are agreeing to the Terms & Conditions and Privacy Policy
              </div>
            </form>
            <div className="mt-8 text-center">
              <p className="text-black">
                dont have an account?{' '}
                <a href="/signup" className="text-yellow-500 hover:text-yellow-600">
                  Register
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}