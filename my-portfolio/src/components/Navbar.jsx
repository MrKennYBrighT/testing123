// Import useState for managing the mobile menu's open/close state.
import React, { useState } from 'react';

// Navbar component receives `navigate` (function to change pages),
// `currentPage` (to highlight the active link), and `userId` (to display).
const Navbar = ({ navigate, currentPage, userId }) => {
  // State to control if the mobile navigation menu is open or closed.
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Array defining the navigation links (name and corresponding page path).
  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Projects', path: 'projects' },
    { name: 'Contact', path: 'contact' },
  ];

  return (
    // Navigation bar structure. All styling is now handled by `style.css`.
    <nav className="navbar">
      <div className="navbar-container">
        {/* Portfolio title/logo. */}
        <div className="navbar-logo">
          My Portfolio
        </div>

        {/* Mobile menu (hamburger) button. */}
        <button
          className="navbar-toggle-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggles the menu state.
          aria-label="Toggle navigation" // Accessibility label.
        >
          {/* SVG icon changes based on whether the menu is open (X) or closed (hamburger). */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>

        {/* Navigation links container. */}
        <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-list">
            {/* Map through `navItems` to create a button for each link. */}
            {navItems.map((item) => (
              <li key={item.path}> {/* `key` is important for lists in React. */}
                <button
                  onClick={() => {
                    navigate(item.path); // Calls the `navigate` function passed from App.
                    setIsMenuOpen(false); // Closes mobile menu after clicking a link.
                  }}
                  // Dynamic styling: active link gets a white background, others are transparent.
                  className={`navbar-button ${currentPage === item.path ? 'active' : ''}`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Displays the User ID at the bottom of the navbar if it exists. */}
      {userId && (
        <div className="navbar-user-id">
          User ID: {userId}
        </div>
      )}
    </nav>
  );
};

// Export the Navbar component.
export default Navbar;
