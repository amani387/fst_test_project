"use client";
import { useState } from 'react';

export default function SignupForm() {
  const [logo, setLogo] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
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
            <h2 className="text-center text-gray-800 text-xl font-bold mb-6">Set Up Your Office</h2>
            
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Logo here</p>
                </div>
                <div className="absolute bottom-0 right-0 bg-yellow-500 w-10 h-10 rounded-full flex items-center justify-center">
                  <span className="text-white">+</span>
                </div>
              </div>
            </div>
            
            <form onSubmit={onSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Enter Your Name *
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="First & Last Name"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Enter Your Email *
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email Here"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
                  Your Company Name *
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="companyName"
                  type="text"
                  placeholder="Name Here"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyWebsite">
                  Your Company Website *
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="companyWebsite"
                  type="url"
                  placeholder="Website Here"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companySize">
                  Company Size *
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="companySize"
                >
                  <option value="">Choose Your Company Size</option>
                  <option value="small">Small (1-10 employees)</option>
                  <option value="medium">Medium (11-50 employees)</option>
                  <option value="large">Large (51+ employees)</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Create Password *
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Type Password"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                  Confirm Password *
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
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
                Already have an account?{' '}
                <a href="/login" className="text-yellow-500 hover:text-yellow-600">
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>

     
      </div>
    </div>
  );
}