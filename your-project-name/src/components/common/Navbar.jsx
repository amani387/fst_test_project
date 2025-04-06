import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-transparent text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-yellow-400 mr-2">●</span>
            <span className="font-bold text-xl">teamify</span>
          </Link>
        </div>
        
        <div className="flex items-center space-x-8">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/pricing" className="hover:text-gray-300">Pricing</Link>
          <Link href="/aboutPage" className="hover:text-gray-300">About Us</Link>
          <Link href="/contactUs" className="hover:text-gray-300">Contact Us</Link>
        </div>
        
        <div>
          <Link href="/signup">
            <button className="bg-yellow-500 px-4 py-2 rounded">Sign In</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}