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
      

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left Side Image */}
            <div className="flex justify-center">
              <div className="w-full max-w-md h-auto rounded-full bg-gray-200 overflow-hidden">
                {/* Placeholder for image */}
                <div className="w-full h-full bg-gray-300 animate-pulse"></div>
              </div>
            </div>
            
            {/* Right Side Content */}
            <div>
              <h1 className="text-4xl font-bold mb-4 text-yellow-500">Our Vision</h1>
              <p className="text-xl mb-8">
                We believe that good design is powerful, hard work is essential, and exploring the unknown is important.
              </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="container mx-auto px-4 py-16 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Service 1 */}
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 shadow-lg">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-yellow-500 mr-2">●</span>
                Identity Design & Branding
              </h2>
              <p className="text-gray-200">
                We create identities and corresponding systems. Every visual is considered and paired with great content and concept. As always, it's done with a relentless pursuit of discovery.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 shadow-lg">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-yellow-500 mr-2">●</span>
                Responsive Web Design
              </h2>
              <p className="text-gray-200">
                We design and build websites that work well, regardless of device type or screen size. We utilize an iterative process that focuses on the environment in which the user actually exists: the browser.
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="container mx-auto px-4 py-16 border-t border-white/20">
          <h2 className="text-xl font-bold mb-8 flex items-center">
            <span className="text-yellow-500 mr-2">●</span>
            Less talk, more walk
          </h2>
          <p className="text-gray-200 mb-8">
            We dig deep, explore opportunities, and execute on ideas worth a damn. We work with individuals who understand that design is a process and our raw ingredient is time. Collaboration is a must, egos are a no-go, and we prefer to do the work instead of just talk about it.
          </p>
        </div>

        {/* Team Section */}
        <div className="container mx-auto px-4 py-16 border-t border-white/20">
          <h2 className="text-xl font-bold mb-8 flex items-center">
            <span className="text-yellow-500 mr-2">●</span>
            Our Team
          </h2>
          
          {/* Team Member 1 */}
          <div className="flex items-center mb-8">
            <div className="w-24 h-24 rounded-full bg-gray-200 mr-8">
              {/* Placeholder for team member image */}
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Ato Alemayehu</h3>
              <p className="text-gray-400 text-sm">
                14 years experience / Houston-native / Cosmology nerd / Son of a printer / Proud Dad / "Discipline, not desire, determines destiny." / @alexfitzhenry
              </p>
            </div>
          </div>
          
          {/* Team Member 2 */}
          <div className="flex items-center mb-8">
            <div className="w-24 h-24 rounded-full bg-gray-200 mr-8">
              {/* Placeholder for team member image */}
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Hiwot Alemayehu</h3>
              <p className="text-gray-400 text-sm">
                8 years experience / Self-taught / Former life scientist / Gaming enthusiast / Outsider / "If you fail to prepare, prepare to fail." / @HiwotAlemayehu
              </p>
            </div>
          </div>
           {/* Team Member 2 */}
           <div className="flex items-center mb-8">
            <div className="w-24 h-24 rounded-full bg-gray-200 mr-8">
              {/* Placeholder for team member image */}
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Amaneul Neg</h3>
              <p className="text-gray-400 text-sm">
                8 years experience / Self-taught / Former life scientist / Gaming enthusiast / Outsider / "If you fail to prepare, prepare to fail." / @AMANE
              </p>
            </div>
          </div>
           {/* Team Member 2 */}
           <div className="flex items-center mb-8">
            <div className="w-24 h-24 rounded-full bg-gray-200 mr-8">
              {/* Placeholder for team member image */}
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Birk Yilma</h3>
              <p className="text-gray-400 text-sm">
                8 years experience / Self-taught / Former life scientist / Gaming enthusiast / Outsider / "If you fail to prepare, prepare to fail." / @Biruk
              </p>
            </div>
          </div>
        </div>
 {/* Values Section */}
 <div className="container mx-auto px-4 py-16 border-t border-white/20">
          <h2 className="text-xl font-bold mb-8 flex items-center">
            <span className="text-yellow-500 mr-2">●</span>
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 shadow-lg">
              <h3 className="text-lg font-bold mb-4">Innovation</h3>
              <p className="text-gray-200">
                We strive to push boundaries and explore new possibilities in everything we do.
              </p>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 shadow-lg">
              <h3 className="text-lg font-bold mb-4">Collaboration</h3>
              <p className="text-gray-200">
                We believe in the power of teamwork and collective intelligence to achieve great results.
              </p>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 shadow-lg">
              <h3 className="text-lg font-bold mb-4">Integrity</h3>
              <p className="text-gray-200">
                Honesty and ethical behavior are at the core of everything we do and every decision we make.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 border-t border-white/20">
          <div className="flex justify-between items-center">
            <a href="/terms" className="text-gray-400 hover:text-white">Term & Conditions</a>
            <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
          </div>
        </footer>
      </div>
    </div>
  );
}