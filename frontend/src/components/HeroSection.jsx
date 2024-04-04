import React from 'react';
import { Link } from 'react-router-dom';
function HeroSection() {
  return (
    <section className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://cdn.discordapp.com/attachments/1224934101006417990/1224935180997890148/10782442_19198004.png?ex=661f4cc9&is=660cd7c9&hm=0cbb6d7911fdb9548f2ecf6303414a6ac2d74bc0b1da714b79ce73c112fe8e7e&')",
        // opacity: 0.8
    }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="container mx-auto px-4 flex items-center justify-center h-full relative z-10">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Support Innovative Projects</h1>
          <p className="text-xl mb-8">Help bring ideas to life with crowdfunding.</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full">
            <Link to="/projects">Discover Projects</Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
