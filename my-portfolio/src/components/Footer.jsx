import React from 'react';

// Footer component definition.
const Footer = () => {
  return (
    // Footer styling with dark background, padding, and rounded top corners.
    <footer className="bg-gray-800 text-white py-6 mt-auto rounded-t-xl shadow-inner">
      <div className="container mx-auto text-center">
        {/* Copyright notice. `new Date().getFullYear()` dynamically gets the current year. */}
        <p className="text-sm mb-2">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        {/* Social media links. Replace '#' with your actual profile URLs. */}
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">LinkedIn</a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">GitHub</a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

// Export the Footer component.
export default Footer;
