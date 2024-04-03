
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './buttons/LoginButton';

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div>
            <Link to="/" className="text-xl font-bold text-gray-900">Caring Cause</Link>
          </div>
          <div className="md:hidden">
            <button
              className="block text-gray-700 hover:text-gray-900 focus:outline-none"
              onClick={handleMobileNavToggle}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link></li>
              <li><Link to="/about-us" className="text-gray-700 hover:text-gray-900">About Us</Link></li>
              <li><Link to="/how-it-works" className="text-gray-700 hover:text-gray-900">How It Works</Link></li>
              <li><Link to="/projects" className="text-gray-700 hover:text-gray-900">Projects</Link></li>
              <li><Link to="/contact-us" className="text-gray-700 hover:text-gray-900">Contact Us</Link></li>
            </ul>
          </div>
          <div className="hidden md:block">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
              Login
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation Sidebar */}
      {isMobileNavOpen && (
        <div className="md:hidden bg-white w-full absolute top-0 left-0 z-50">
          <ul className="flex flex-col space-y-4 py-4 px-8">
          <li><Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link></li>
              <li><Link to="/about-us" className="text-gray-700 hover:text-gray-900">About Us</Link></li>
              <li><Link to="/how-it-works" className="text-gray-700 hover:text-gray-900">How It Works</Link></li>
              <li><Link to="/projects" className="text-gray-700 hover:text-gray-900">Projects</Link></li>
              <li><Link to="/contact-us" className="text-gray-700 hover:text-gray-900">Contact Us</Link></li>
            <li><LoginButton/></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
