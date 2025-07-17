// Import necessary React hooks: useState for managing component state.
import React, { useState } from 'react';

// Import the external stylesheet. This line is crucial!
// Ensure that 'style.css' is located in the same directory as this App.jsx file.
import './style.css';
import kennyImg from './assets/kenny.jpg';

// Main App component definition.
const App = () => {
  // State to keep track of the currently active page.
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />; // Fallback to Home page if no match.
    }
  };

  // The main JSX structure of the application.
  return (
    // The main container for the entire application.
    // Class `app-container` will be defined in `style.css`.
    <div className="app-container">
      {/* Navbar component, passed navigation function and current page. */}
      <Navbar navigate={navigate} currentPage={currentPage} />

      {/* Main content area, which will display the current page. */}
      {/* Class `main-content` will be defined in `style.css`. */}
      <main className="main-content">
        {renderPage()} {/* Calls the function to render the active page. */}
      </main>

      {/* Footer component. */}
      <Footer />
    </div>
  );
};

// -----------------------------------------------------------------------------------
// Individual Component Definitions (all combined into App.jsx to resolve import errors)
// -----------------------------------------------------------------------------------

// Navbar Component
const Navbar = ({ navigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Projects', path: 'projects' },
    { name: 'Contact', path: 'contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          My Portfolio
        </div>

        <button
          className="navbar-toggle-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>

        <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <ul className="navbar-list">
            {navItems.map((item) => (
              <li key={item.path}>
                <button
                  onClick={() => {
                    navigate(item.path);
                    setIsMenuOpen(false);
                  }}
                  className={`navbar-button ${currentPage === item.path ? 'active' : ''}`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

// Home Section Component
const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-card">
        <img
          src={kennyImg}
          alt="Your Photo"
          className="home-photo"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/150x150/A78BFA/ffffff?text=Error"; }}
        />
        <h1 className="home-title">
          Hi, I'm <span className="home-title-purple">Moses Olorunda</span> 👋
        </h1>
        <p className="home-description">
          A passionate <span className="home-description-blue">Full-Stack Developer</span> building
          innovative and user-friendly web applications.
        </p>
        <div className="home-buttons">
          <a
            href="#projects"
            className="home-button"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="home-button purple"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

// About Section Component
const About = () => {
  return (
    <section id="about" className="portfolio-section">
      <div className="section-card">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image-container">
            <img
              src={kennyImg}
              alt="About Me"
              className="about-image"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x300/A78BFA/ffffff?text=Error"; }}
            />
          </div>
          <div className="about-text-content">
            <p className="mb-4">
              Hello! I'm a dedicated and enthusiastic web developer with a passion for creating
              beautiful, functional, and user-centric digital experiences. My journey into web
              development began several years ago, driven by curiosity and a desire to build things
              that solve real-world problems.
            </p>
            <p className="mb-4">
              I specialize in front-end development using React, leveraging its component-based
              architecture to build scalable and maintainable applications. I also have experience
              with back-end technologies, enabling me to work across the full stack.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or enjoying a good book. I'm always eager to learn and grow,
              and I love collaborating with others to bring ideas to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Project Card Component (used within Projects)
const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img
        src={project.image}
        alt={project.title}
        className="project-image"
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x250/cccccc/000000?text=Image+Error"; }}
      />
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-links">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-button"
          >
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-button github"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

// Projects Section Component
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, product listings, shopping cart, and payment integration.',
      image: 'https://placehold.co/400x250/3B82F6/ffffff?text=Project+1',
      demoLink: '#',
      githubLink: '#',
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
    <section id="projects" className="portfolio-section">
      <div className="section-card">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setStatusMessage('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatusMessage(''), 5000);
  };

  return (
    <section id="contact" className="portfolio-section">
      <div className="section-card">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-form-container">
          {statusMessage && (
            <div className="status-message" role="alert">
              <span className="block sm:inline">{statusMessage}</span>
            </div>
          )}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
              ></textarea>
            </div>
            <div className="contact-submit-button-wrapper">
              <button
                type="submit"
                className="contact-submit-button"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">&copy; {new Date().getFullYear()} Moses Olorunda. All rights reserved.</p>
        <div className="footer-links">
          <a href="#" className="footer-link">LinkedIn</a>
          <a href="#" className="footer-link">GitHub</a>
          <a href="#" className="footer-link">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

// Export the App component as the default export for this file.
export default App;
