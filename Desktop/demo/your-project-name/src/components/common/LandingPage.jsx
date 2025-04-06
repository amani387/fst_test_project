"use client";
import { useState } from 'react';

export default function LandingPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url('/images/background.png')`, // Replace with your actual image path
      }}
    >
      <div className="backdrop-blur-sm bg-black/60 min-h-screen">
       

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-30 flex justify-center items-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Welcome To Your <span className="text-yellow-500">Virtual Office</span>
            </h1>
            <div className="flex justify-center mt-60 space-x-20">
              <button className="bg-yellow-500 hover:bg-yellow-600 py-3 px-6 rounded text-white font-medium">
                Instant Demo
              </button>
              <button className="bg-transparent hover:bg-white/10 py-3 px-6 rounded border border-yellow-600 text-white font-medium">
                Setup Your Company
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/terms" className="text-gray-400 hover:text-white">Term & Conditions</a>
            <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
          </div>
        </footer>
      </div>
    </div>
  );
}