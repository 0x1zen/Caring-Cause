import React from 'react';
import { Link } from 'react-router-dom';

function ProjectsNavbar() {
  return (
    <nav className="bg-gray-800 text-white py-4 border-b-4 border-red-500">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center ml-5">
          <img src="https://cdn.discordapp.com/attachments/1224934101006417990/1225009641218379856/804229_preview-Photoroom.jpg?ex=661f9222&is=660d1d22&hm=570e298f916748c005a6d938d0e961109d41c27c4973d1117fd8aa8770682e14&"
           alt="Logo" className="h-8 mr-2 rounded-full" /> {/* Add your logo image here */}
          <Link to="/" className="text-xl font-bold">Caring Cause</Link>
        </div>
        <div className='flex gap-5'>
          <p className="text-xl font-bold ">Start Your FundRaiser Now</p>
          <Link to="/fund-raiser" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">
            FundRaiser
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default ProjectsNavbar;
