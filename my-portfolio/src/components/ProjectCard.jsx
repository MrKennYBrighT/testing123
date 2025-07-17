import React from 'react';

// ProjectCard component receives a `project` object as a prop.
const ProjectCard = ({ project }) => {
  return (
    // Card container with styling for background, rounded corners, shadow, and hover effects.
    <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-200">
      {/* Project image. */}
      <img
        src={project.image} // Image source from the project object.
        alt={project.title} // Alt text for accessibility.
        className="w-full h-48 object-cover" // Ensures image covers the area and is responsive.
        // `onError` handles cases where the image fails to load.
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x250/cccccc/000000?text=Image+Error"; }}
      />
      <div className="p-6">
        {/* Project title. */}
        <h3 className="text-2xl font-bold text-purple-700 mb-2">{project.title}</h3>
        {/* Project description. */}
        <p className="text-gray-700 mb-4">{project.description}</p>
        {/* Links for demo and GitHub. */}
        <div className="flex space-x-4">
          <a
            href={project.demoLink}
            target="_blank" // Opens the link in a new browser tab.
            rel="noopener noreferrer" // Security measure for `target="_blank"`.
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300"
          >
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800 transition duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

// Export the ProjectCard component.
export default ProjectCard;
