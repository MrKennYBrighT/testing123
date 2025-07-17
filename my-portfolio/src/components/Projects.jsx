import React from 'react';
// ProjectCard component is now defined within this file to resolve import errors.

// Projects section component definition.
const Projects = () => {
  // Array of project data. Each object represents a single project.
  // You should replace these with your actual projects!
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, product listings, shopping cart, and payment integration.',
      image: 'https://placehold.co/400x250/3B82F6/ffffff?text=Project+1',
      demoLink: '#', // Replace with actual demo link.
      githubLink: '#', // Replace with actual GitHub link.
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A responsive task management application with drag-and-drop functionality, due dates, and categorization.',
      image: 'https://placehold.co/400x250/8B5CF6/ffffff?text=Project+2',
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that fetches real-time weather data using a public API and displays it in an intuitive dashboard.',
      image: 'https://placehold.co/400x250/EC4899/ffffff?text=Project+3',
      demoLink: '#',
      githubLink: '#',
    },
    {
      id: 4,
      title: 'Recipe Finder',
      description: 'An app to search for recipes based on ingredients, dietary preferences, and cuisine type, with detailed recipe views.',
      image: 'https://placehold.co/400x250/10B981/ffffff?text=Project+4',
      demoLink: '#',
      githubLink: '#',
    },
  ];

  return (
    <section id="projects" className="projects-section full-width-section">
      <div className="container mx-auto bg-white rounded-xl shadow-xl p-8 md:p-12 transform transition-all duration-500 hover:scale-[1.02]">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">My Projects</h2>
        {/* Grid layout for project cards.
            `grid-cols-1`: 1 column on small screens.
            `md:grid-cols-2`: 2 columns on medium screens.
            `lg:grid-cols-2`: 2 columns on large screens.
            `gap-8`: Spacing between grid items. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Map over the `projects` array. For each project, render a `ProjectCard` component. */}
          {/* `key={project.id}`: Essential for React to efficiently update lists. */}
          {/* `project={project}`: Passes the entire project object as a prop to `ProjectCard`. */}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Project Card Component (used within Projects)
// This is a reusable component for displaying individual project details.
const ProjectCard = ({ project }) => {
  return (
    // Card container with styling for background, rounded corners, shadow, and hover effects.
    <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-200">
      {/* Project image. */}
      <img
        src={project.image} // Image source from the project object.
        alt={project.title} // Alt text for accessibility.
        className="w-full h-48 object-cover" // Ensures image covers the area and is responsive.
        // `onError` handles cases where the image fails to load, replacing it with an error placeholder.
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

// Export the Projects component.
export default Projects;
