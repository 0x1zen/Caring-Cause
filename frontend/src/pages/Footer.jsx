import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">&copy; {currentYear} Caring Cause. All rights reserved.</p>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-right">
            <ul className="flex justify-center md:justify-end">
              <li className="mx-2 hover:underline"><a href="#">Terms of Service</a></li>
              <li className="mx-2 hover:underline"><a href="#">Privacy Policy</a></li>
              <li className="mx-2 hover:underline"><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
