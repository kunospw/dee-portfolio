// src/components/Contact.jsx
import React, { useState } from 'react';

const Contact = () => {
  const [isMinimized, setIsMinimized] = useState(false); // State for minimization
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    const mailtoLink = `mailto:dyahrini908@gmail.com?` +
                       `subject=${encodeURIComponent(subject)}&` +
                       `body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    window.location.href = mailtoLink;

    // Optionally clear form fields after submission attempt
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="flex justify-center w-full px-4 mt-4">
      <div className={`bg-blue-600 border-2 border-blue-800 w-full max-w-4xl shadow-xl transition-all duration-500 ease-in-out ${isMinimized ? 'h-10' : 'h-auto'}`}>
        <div className="flex justify-between items-center bg-blue-500 border-b-2 border-blue-800 px-3 py-1 text-blue-900 font-bold text-xs uppercase">
          <span>Contact_Me.Txt</span>
          <span className="flex space-x-1">
            <button aria-label="minimize" className="w-3 h-3 bg-blue-800 border border-blue-900" onClick={() => setIsMinimized(!isMinimized)}></button>
            <button aria-label="resize" className="w-3 h-3 bg-blue-800 border border-blue-900"></button>
            <button aria-label="close" className="w-3 h-3 bg-blue-800 border border-blue-900"></button>
          </span>
        </div>

        <div className={`bg-blue-100 text-blue-900 text-xs p-4 font-mono border-t border-blue-800 transition-all duration-500 ease-in-out ${isMinimized ? 'hidden' : 'visible'}`}>
          <h2 className="text-lg font-bold mb-2 text-center">Get in Touch!</h2>
          <p className="mb-4 text-center">
            Feel free to reach out to me for collaborations, questions, or just to say hello by filling out the form below!
          </p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="name" className="block text-blue-900 mb-1">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 bg-blue-200 border border-blue-800 text-blue-900 focus:outline-none focus:border-blue-700"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-blue-900 mb-1">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 bg-blue-200 border border-blue-800 text-blue-900 focus:outline-none focus:border-blue-700"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-blue-900 mb-1">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-2 bg-blue-200 border border-blue-800 text-blue-900 focus:outline-none focus:border-blue-700"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-blue-900 mb-1">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full p-2 bg-blue-200 border border-blue-800 text-blue-900 focus:outline-none focus:border-blue-700"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-blue-100 font-bold py-2 px-4 text-xs border border-blue-800 transition-colors duration-200"
            >
              ✉️ Send Email
            </button>
          </form>
          <p className="mt-4 text-center">
            Or connect with me directly:
          </p>
          <div className="space-y-1 mt-2 text-center">
            <p>
              LinkedIn: <a href="https://www.linkedin.com/in/dyahpusporini/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">linkedin.com/in/dyahpusporini</a>
            </p>
            <p>
              GitHub: <a href="https://github.com/kunospw" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">github.com/kunospw</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;