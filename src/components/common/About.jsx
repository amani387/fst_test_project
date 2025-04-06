"use client";
import { useState } from 'react';

export default function AboutPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url('/images/background.png')`, // Replace with your actual image path
      }}
    >
      <div className="backdrop-blur-sm bg-black/60 min-h-screen">
        {/* About Content */}
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* About Info */}
            <div className="bg-white/20 backdrop-blur-lg p-8 rounded-xl border border-white/20 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-yellow-500 mr-2">●</span>
                Who We Are
              </h2>
              <p className="text-gray-200 mb-4">
                Teamify is a leading provider of virtual office solutions designed to help businesses operate efficiently in the digital age. Our platform offers a comprehensive suite of tools and services to streamline your workflow and enhance productivity.
              </p>
              <p className="text-gray-200">
                We believe in empowering businesses of all sizes with the tools they need to succeed in today's competitive landscape.
              </p>
            </div>
            
            {/* Team Info */}
            <div className="bg-white/20 backdrop-blur-lg p-8 rounded-xl border border-white/20 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-yellow-500 mr-2">●</span>
                Our Mission
              </h2>
              <p className="text-gray-200 mb-4">
                Our mission is to revolutionize the way businesses operate by providing innovative, user-friendly solutions that adapt to your unique needs. We strive to create a seamless experience that allows you to focus on what matters most—growing your business.
              </p>
              <p className="text-gray-200">
                Join thousands of satisfied customers who have transformed their operations with Teamify.
              </p>
            </div>
          </div>
          
          {/* Team Members */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8 flex items-center">
              <span className="text-yellow-500 mr-2">●</span>
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((member) => (
                <div
                  key={member}
                  className="bg-white/60 backdrop-blur-lg p-4 rounded-xl border border-white/20 shadow-lg hover:bg-white/70 transition-all duration-300"
                >
                  <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold text-center mb-2">Team Member</h3>
                  <p className="text-gray-200 text-center">Role</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
}