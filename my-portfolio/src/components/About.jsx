import React from 'react';

// About section component definition.
const About = () => {
  return (
    <section id="about" className="py-12 px-4 full-width-section">
      {/* Main content card for the about section. */}
      <div className="container mx-auto bg-white rounded-xl shadow-xl p-8 md:p-12 transform transition-all duration-500 hover:scale-[1.02]">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          {/* Placeholder image for the about section. */}
          <div className="md:w-1/3 mb-6 md:mb-0">
            <img
              src="https://placehold.co/300x300/A78BFA/ffffff?text=About+Image"
              alt="About Me"
              className="rounded-lg shadow-lg w-full h-auto object-cover border-4 border-purple-500"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/300x300/A78BFA/ffffff?text=Error"; }}
            />
          </div>
          {/* Your bio/description text. */}
          <div className="md:w-2/3 text-lg text-gray-700 leading-relaxed">
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

// Export the About component.
export default About;
