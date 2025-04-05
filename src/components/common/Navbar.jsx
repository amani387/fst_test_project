import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center">
              <span className="text-yellow-400 mr-2">●</span>
              <span className="font-bold text-xl">teamify</span>
            </div>
          </Link>
        </div>
        
        <div className="flex items-center space-x-8">
          <Link href="/">
            <a className="hover:text-gray-300">Home</a>
          </Link>
          <Link href="/features">
            <a className="hover:text-gray-300">Features</a>
          </Link>
          <Link href="/about">
            <a className="hover:text-gray-300">About Us</a>
          </Link>
          <Link href="/contact">
            <a className="hover:text-gray-300">Contact Us</a>
          </Link>
        </div>
        
        <div>
          {session ? (
            <button onClick={() => signOut()} className="bg-yellow-500 px-4 py-2 rounded">Sign Out</button>
          ) : (
            <Link href="/login">
              <button className="bg-yellow-500 px-4 py-2 rounded">Sign In</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}