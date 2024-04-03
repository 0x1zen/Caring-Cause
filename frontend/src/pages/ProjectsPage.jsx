import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ProjectsNavbar from '../components/ProjectsNavbar';
import Button from '../components/buttons/Button';

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch projects from backend based on selected category
    // Example: axios.get(`/api/projects?category=${selectedCategory}&search=${searchTerm}`).then(response => setProjects(response.data));
    const fakeProjects = [
      { id: 1, title: 'Project 1', category: 'Education', image: 'project1.jpg', donationAmount: 1000 },
      { id: 2, title: 'Project 2', category: 'Agriculture', image: 'project2.jpg', donationAmount: 500 },
      { id: 3, title: 'Project 3', category: 'Medical', image: 'project3.jpg', donationAmount: 1500 },
      { id: 4, title: 'Project 4', category: 'Startups', image: 'project4.jpg', donationAmount: 2000 },
      // Add more sample projects as needed
    ];
    setProjects(fakeProjects);
  }, [selectedCategory, searchTerm]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <ProjectsNavbar />
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-1/6 bg-gray-800 p-4 flex flex-col md:h-screen">
          <h2 className="text-lg font-bold mb-4 text-white text-center">Categories</h2>
          <ul className="flex-1 overflow-y-auto">
            <li>
              <button className="text-white hover:bg-gray-700 hover:text-blue-500 py-2 px-4 w-full rounded-md" onClick={() => handleCategorySelect('Education')}>
                Education
              </button>
            </li>
            <li>
              <button className="text-white hover:bg-gray-700 hover:text-blue-500 py-2 px-4 w-full rounded-md" onClick={() => handleCategorySelect('Agriculture')}>
                Agriculture
              </button>
            </li>
            <li>
              <button className="text-white hover:bg-gray-700 hover:text-blue-500 py-2 px-4 w-full rounded-md" onClick={() => handleCategorySelect('Medical')}>
                Medical
              </button>
            </li>
            <li>
              <button className="text-white hover:bg-gray-700 hover:text-blue-500 py-2 px-4 w-full rounded-md" onClick={() => handleCategorySelect('Startups')}>
                Startups
              </button>
            </li>
          </ul>
        </div>

        {/* Main Section */}
        <div className="w-full md:w-5/6 p-4">
          <div className="flex mb-4 gap-1">
            <input
              type="text"
              placeholder="Search Projects"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full bg-white border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-blue-500"
            />
            <Button>Search</Button>
          </div>
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filteredProjects.map((project) => (
              <div key={project.id} className="border rounded-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="mb-2">Category: {project.category}</p>
                  <p className="mb-2">Donation Amount: ${project.donationAmount}</p>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                    Donate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
