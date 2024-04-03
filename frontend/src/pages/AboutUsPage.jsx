import React from 'react';
import Navbar from '../components/NavBar';


function AboutUsPage() {
  return (
    <div>
      <Navbar></Navbar>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla eget odio rutrum laoreet. 
            Vestibulum id ex in eros aliquam finibus a et elit. In hac habitasse platea dictumst. Aenean efficitur 
            vestibulum sapien, eget pharetra urna finibus ac. Nullam ac eros massa. Proin aliquam libero ac dolor 
            eleifend, non aliquet est fringilla. Nulla facilisi. Cras tincidunt convallis leo, non suscipit libero 
            sodales et. Proin in mi tellus. In vitae eros luctus, scelerisque urna nec, aliquam nunc. Aenean vitae 
            purus nec quam tincidunt faucibus nec eget risus. Nullam laoreet scelerisque felis a ultrices. Sed congue 
            fermentum erat, nec condimentum nunc blandit non.
          </p>
          <h3 className="text-xl font-bold mt-8 mb-4">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla eget odio rutrum laoreet. 
            Vestibulum id ex in eros aliquam finibus a et elit. In hac habitasse platea dictumst. Aenean efficitur 
            vestibulum sapien, eget pharetra urna finibus ac. Nullam ac eros massa. Proin aliquam libero ac dolor 
            eleifend, non aliquet est fringilla. Nulla facilisi. Cras tincidunt convallis leo, non suscipit libero 
            sodales et. Proin in mi tellus. In vitae eros luctus, scelerisque urna nec, aliquam nunc. Aenean vitae 
            purus nec quam tincidunt faucibus nec eget risus. Nullam laoreet scelerisque felis a ultrices. Sed congue 
            fermentum erat, nec condimentum nunc blandit non.
          </p>
          <h3 className="text-xl font-bold mt-8 mb-4">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec nulla eget odio rutrum laoreet. 
            Vestibulum id ex in eros aliquam finibus a et elit. In hac habitasse platea dictumst. Aenean efficitur 
            vestibulum sapien, eget pharetra urna finibus ac. Nullam ac eros massa. Proin aliquam libero ac dolor 
            eleifend, non aliquet est fringilla. Nulla facilisi. Cras tincidunt convallis leo, non suscipit libero 
            sodales et. Proin in mi tellus. In vitae eros luctus, scelerisque urna nec, aliquam nunc. Aenean vitae 
            purus nec quam tincidunt faucibus nec eget risus. Nullam laoreet scelerisque felis a ultrices. Sed congue 
            fermentum erat, nec condimentum nunc blandit non.
          </p>
          <h3 className="text-xl font-bold mt-8 mb-4">Demo Information</h3>
          <p className="text-gray-700 leading-relaxed">
            Our crowdfunding platform is designed to connect project creators with backers. With our platform, project creators
            can showcase their ideas and raise funds from a community of supporters. Backers can discover new and innovative 
            projects to support and contribute to their success. We provide a secure and user-friendly environment for both 
            creators and backers to engage with each other and bring projects to life.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutUsPage;
