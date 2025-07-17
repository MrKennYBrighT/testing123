// Import useState for managing form input values and status messages.
import React, { useState } from 'react';

// Contact section component definition.
const Contact = () => {
  // State to hold the values of the form inputs.
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  // State to display feedback messages to the user (e.g., "Message Sent!").
  const [statusMessage, setStatusMessage] = useState('');

  // Handles changes to any form input field.
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure `name` (input's name attribute) and `value` (input's current value).
    setFormData({ ...formData, [name]: value }); // Update the specific field in the `formData` state.
  };

  // Handles the form submission.
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default browser behavior of reloading the page on form submission.

    // In a real application, you would send `formData` to a backend server here
    // (e.g., using `fetch` or Axios to an API endpoint).
    console.log('Form submitted:', formData); // For now, just log the data to the console.

    // Display a success message to the user.
    setStatusMessage('Thank you for your message! I will get back to you soon.');
    // Clear the form fields after successful submission.
    setFormData({ name: '', email: '', message: '' });
    // Hide the status message after 5 seconds.
    setTimeout(() => setStatusMessage(''), 5000);
  };

  return (
    <section id="contact" className="contact-section full-width-section">
      <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 transform transition-all duration-500 hover:scale-[1.02]">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-8">Contact Me</h2>
        <div className="max-w-2xl mx-auto">
          {/* Conditionally display the status message if it exists. */}
          {statusMessage && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
              <span className="block sm:inline">{statusMessage}</span>
            </div>
          )}
          {/* Contact form structure. */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name" // `name` attribute matches the key in `formData`.
                value={formData.name} // Input value is controlled by React state.
                onChange={handleChange} // Calls `handleChange` on every input change.
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                required // HTML5 validation: makes the field mandatory.
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6" // Sets the default number of visible text lines.
                className="shadow appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit" // Specifies this is a submit button.
                className="bg-purple-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
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

// Export the Contact component.
export default Contact;
