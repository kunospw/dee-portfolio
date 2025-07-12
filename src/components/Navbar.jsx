import React from 'react';
import raccoon from '../assets/raccoon.gif';
import clouds from '../assets/clouds-bg.jpg';

const Navbar = () => {
  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }, // Added Contact item
  ];

  return (
    <div className="relative w-full">
      {/* Cloud background image covering top part of screen */}
      <div className="w-full h-35 relative overflow-hidden">
        <img
          src={clouds}
          alt="pixel clouds"
          className="w-full h-full object-cover"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      {/* Navbar positioned over the cloud background */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-max">
        <nav className="bg-blue-600 border-2 border-blue-800 shadow-lg px-2 py-1">
          <ul className="flex items-center space-x-1">
            {navItems.map((item, index) => (
              <li key={index}>
                <a // Changed button to a tag
                  href={`#${item.id}`} // Added href for scrolling
                  className="bg-blue-500 hover:bg-blue-400 border-2 border-blue-800 border-r-blue-900 border-b-blue-900 px-3 py-[2px] text-xs font-bold text-blue-900 uppercase tracking-wide shadow-sm active:bg-blue-600"
                >
                  {item.name}
                  <span className="hidden sm:inline"> ▶</span>
                </a>
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
    </div>
  );
};

export default Navbar;