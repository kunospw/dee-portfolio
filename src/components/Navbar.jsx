import React from 'react';
import raccoon from '../assets/raccoon.gif';

const Navbar = () => {
  return (
    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-max">
      <nav className="bg-blue-600 border-2 border-blue-800 shadow-lg px-2 py-1">
        <ul className="flex items-center space-x-1">
          {['Home', 'About', 'Projects', 'Contact'].map((text, index) => (
            <li key={index}>
              <button className="bg-blue-500 hover:bg-blue-400 border-2 border-blue-800 border-r-blue-900 border-b-blue-900 px-3 py-[2px] text-xs font-bold text-blue-900 uppercase tracking-wide shadow-sm active:bg-blue-600">
                {text}
                <span className="hidden sm:inline"> ▶</span>
              </button>
            </li>
          ))}
          <li>
            <div className="bg-blue-600 border border-blue-800 px-1 py-1">
              <img src={raccoon} alt="raccoon gif" className="w-10 h-auto" />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
