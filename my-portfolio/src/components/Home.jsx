// Import React (though not strictly necessary for simple functional components in newer React versions,
// it's good practice to include it if you use JSX).
import React from 'react';

// Home section component definition.
const Home = () => {
  return (
    // Section container with flex properties to center content.
    // `min-h-[calc(100vh-200px)]`: Ensures a minimum height for visual spacing.
    <section id="home" className="home-section">
      {/* Main content card for the home section. */}
      {/* Includes hover effects for a subtle animation. */}
      <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 max-w-4xl w-full transform transition-all duration-500 hover:scale-105">
        {/* Placeholder image for your photo. */}
        <img
          src="/my-portfolio/src/assets/kenny.jpg" // Placeholder URL.
          alt="Your Photo"
          className="rounded-full w-32 h-32 mx-auto mb-6 border-4 border-blue-500 shadow-lg"
          // `onError` handles cases where the image fails to load, replacing it with an error placeholder.
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/A78BFA/ffffff?text=Error"; }}
        />
        {/* Your name and greeting. */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-800 mb-4 leading-tight">
          Hi, I'm <span className="text-purple-600">Your Name!</span> 👋
        </h1>
        {/* Your professional tagline. */}
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          A passionate <span className="font-semibold text-blue-600">Full-Stack Developer</span> building
          innovative and user-friendly web applications.
        </p>
        {/* Call-to-action buttons. */}
        <div className="flex justify-center space-x-4">
          <a
            href="#projects" // Link to the projects section (for visual indication, actual navigation is state-based).
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact" // Link to the contact section.
            className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

// Export the Home component.
export default Home;
