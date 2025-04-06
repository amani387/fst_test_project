"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-transparent text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={showMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center">
              <span className="text-yellow-400 mr-2">●</span>
              <span className="font-bold text-xl">teamify</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/pricing" className="hover:text-gray-300">
              Pricing
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact Us
            </Link>
          </div>

          {/* Sign In Button (Desktop Only) */}
          <div className="hidden md:block">
            <Link href="/signup">
              <button className="bg-yellow-500 px-4 py-2 rounded">Sign In</button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {showMenu && (
          <div className="md:hidden mt-4">
            <Link
              href="/"
              className="block w-full text-center py-2 hover:bg-gray-700"
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className="block w-full text-center py-2 hover:bg-gray-700"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="block w-full text-center py-2 hover:bg-gray-700"
            >
              About Us
            </Link>
            <Link
              href="/contactUs"
              className="block w-full text-center py-2 hover:bg-gray-100"
            >
              Contact Us
            </Link>
            <Link
              href="/signup"
              className="block w-full text-center py-2 hover:bg-gray-700"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
