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
        <div className="container mx-auto px-4 py-20 flex justify-center items-center min-h-screen">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">
              Welcome To Your <span className="text-yellow-500">Virtual Office</span>
            </h1>
            <p className="text-gray-400 mb-8">
              Transform your business with our innovative virtual office solutions. We provide the tools and infrastructure you need to operate efficiently in the digital age.
            </p>
            <div className="flex justify-center mt-10 space-x-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 py-3 px-6 rounded text-white font-medium">
                Instant Demo
              </button>
              <button className="bg-transparent hover:bg-white/10 py-3 px-6 rounded border border-yellow-600 text-white font-medium">
                Setup Your Company
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-16 border-t border-white/20">
          <h2 className="text-2xl font-bold text-center mb-8 text-yellow-500">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-yellow-500 mr-2">●</span>
                Innovative Solutions
              </h3>
              <p className="text-gray-200">
                We provide cutting-edge solutions designed to meet the needs of modern businesses.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-yellow-500 mr-2">●</span>
                User-Friendly Design
              </h3>
              <p className="text-gray-200">
                Our platform is designed with simplicity and usability in mind, ensuring a smooth experience.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-yellow-500 mr-2">●</span>
                24/7 Support
              </h3>
              <p className="text-gray-200">
                We offer round-the-clock support to ensure you always have help when you need it.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-4 border-t border-white/20">
          <div className="flex justify-between items-center">
            <a href="/terms" className="text-gray-400 hover:text-white">Term & Conditions</a>
            <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
          </div>
        </footer>
      </div>
    </div>
  );
}