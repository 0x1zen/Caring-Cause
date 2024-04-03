
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './buttons/Button';
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const {user,loginWithRedirect,isAuthenticated,logout,getAccessTokenSilently}=useAuth0();

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  useEffect(() => {
    const getUserInfo = async () => {
      if (isAuthenticated) {
        try {
          const accessToken = await getAccessTokenSilently();
          localStorage.setItem("token", accessToken);
          console.log("User",user);
        } catch (error) {
          console.error('Error fetching user information:', error);
        }
      }
    };

    getUserInfo();
  }, [isAuthenticated, getAccessTokenSilently, user]);

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
        <div className="flex items-center ml-5">
          <img src="https://cdn.discordapp.com/attachments/1224934101006417990/1225009641218379856/804229_preview-Photoroom.jpg?ex=661f9222&is=660d1d22&hm=570e298f916748c005a6d938d0e961109d41c27c4973d1117fd8aa8770682e14&"
           alt="Logo" className="h-8 mr-2 rounded-full" /> {/* Add your logo image here */}
          <Link to="/" className="text-xl font-bold">Caring Cause</Link>
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
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated && <h3 className='text-xl font-bold text-gray-900'>Welcome, {user.name}</h3>}
            {isAuthenticated ? <Button onClick={(e)=>logout()}>Log Out</Button> : (
                <Button onClick={(e)=>loginWithRedirect()}>Log In</Button>
            )}
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
              <li>{isAuthenticated ? <Button onClick={(e)=>logout()}>Log Out</Button> : (
                <Button onClick={(e)=>{loginWithRedirect()}}>Log In</Button>
                )}</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
