// HowItWorksPage.js

import React from 'react';
import Navbar from '../components/NavBar';

function HowItWorksPage() {
  return (
    <div>
      <Navbar />
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">1. Create Your Project</h3>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla eget odio rutrum laoreet. 
                Vestibulum id ex in eros aliquam finibus a et elit. In hac habitasse platea dictumst. Aenean efficitur 
                vestibulum sapien, eget pharetra urna finibus ac.
              </p>
            </div>
            <div className="mb-8">
              <img src="https://cdn.discordapp.com/attachments/1224934101006417990/1224947611824291941/Pasted_image.png?ex=661f585d&is=660ce35d&hm=9e689f03695461540501db0a10bf6242da702b13fc2ab0c3d5dea923a7f0094b&" alt="Flowchart Diagram" className="w-full h-auto" />
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">2. Set Your Funding Goal</h3>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla eget odio rutrum laoreet. 
                Vestibulum id ex in eros aliquam finibus a et elit. In hac habitasse platea dictumst. Aenean efficitur 
                vestibulum sapien, eget pharetra urna finibus ac.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">3. Reach Out to Backers</h3>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla eget odio rutrum laoreet. 
                Vestibulum id ex in eros aliquam finibus a et elit. In hac habitasse platea dictumst. Aenean efficitur 
                vestibulum sapien, eget pharetra urna finibus ac.
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">4. Receive Backing</h3>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla eget odio rutrum laoreet. 
                Vestibulum id ex in eros aliquam finibus a et elit. In hac habitasse platea dictumst. Aenean efficitur 
                vestibulum sapien, eget pharetra urna finibus ac.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HowItWorksPage;
