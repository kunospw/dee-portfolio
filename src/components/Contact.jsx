// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="flex justify-center w-full px-4">
      <div className="bg-blue-600 border-2 border-blue-800 w-full max-w-2xl shadow-xl">
        <div className="flex justify-between items-center bg-blue-500 border-b-2 border-blue-800 px-3 py-1 text-blue-900 font-bold text-xs uppercase">
          <span>Contact_Me.Txt</span>
          <span className="flex space-x-1">
            <button aria-label="minimize" className="w-3 h-3 bg-blue-800 border border-blue-900"></button>
            <button aria-label="resize" className="w-3 h-3 bg-blue-800 border border-blue-900"></button>
            <button aria-label="close" className="w-3 h-3 bg-blue-800 border border-blue-900"></button>
          </span>
        </div>

        <div className="bg-blue-100 text-blue-900 text-xs p-4 font-mono border-t border-blue-800 text-center">
          <h2 className="text-lg font-bold mb-2">Get in Touch!</h2>
          <p className="mb-4">
            Feel free to reach out to me for collaborations, questions, or just to say hello!
          </p>
          <div className="space-y-2">
            <p>
              Email: <a href="mailto:dyahrini908@gmail.com" className="text-blue-700 hover:underline">dyahrini908@gmail.com</a>
            </p>
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