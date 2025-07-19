// src/components/About.jsx
import React, { useState, useEffect } from 'react';
import userProfileImage from '../assets/Profile.png';
import cvFile from '../assets/Dyah_Puspo_Rini_CV.pdf';

const About = () => {
  const phrases = ['Dyah Puspo Rini', 'Dee.'];
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false); // New state for minimization

  useEffect(() => {
    if (isMinimized) return; // Stop typing animation when minimized

    const currentPhrase = phrases[index];
    let active = true;

    if (!deleting && subIndex === currentPhrase.length) {
      const pause = setTimeout(() => {
        if (active) setDeleting(true);
      }, 1500);
      return () => clearTimeout(pause);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (!active) return;
      if (deleting) {
        setSubIndex((prev) => prev - 1);
        setText(currentPhrase.substring(0, subIndex - 1));
      } else {
        setSubIndex((prev) => prev + 1);
        setText(currentPhrase.substring(0, subIndex + 1));
      }
    }, deleting ? 50 : 100);

    return () => {
      active = false;
      clearTimeout(timeout);
    };
  }, [subIndex, index, deleting, isMinimized]); // Add isMinimized to dependency array

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Dyah_Puspo_Rini_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex justify-center w-full px-4">
      <div className={`flex items-stretch gap-3 w-full max-w-4xl transition-all duration-500 ease-in-out ${isMinimized ? 'h-10' : 'h-auto'}`}> {/* Increased max-w, added transition and conditional height */}
        {/* Profile Picture Card */}
        <div className={`bg-blue-600 w-48 shadow-lg ${isMinimized ? 'hidden' : ''}`}> {/* Hide when minimized */}
          <div className="flex justify-between items-center bg-blue-500 border-b border-blue-800 px-2 py-1 text-blue-900 font-bold text-xs">
            <span>Profile.Exe</span>
            <span className="flex space-x-1">
              <button aria-label="minimize" className="w-2 h-2 bg-blue-800 border border-blue-900" onClick={() => setIsMinimized(!isMinimized)}></button>
              <button aria-label="resize" className="w-2 h-2 bg-blue-800 border border-blue-900"></button>
              <button aria-label="close" className="w-2 h-2 bg-blue-800 border border-blue-900"></button>
            </span>
          </div>

          <div className="bg-blue-100 flex flex-col justify-end h-48.5 overflow-hidden">
            <img
              src={userProfileImage}
              alt="Your Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* About Me Card */}
        <div className={`bg-blue-600 border border-blue-800 flex-1 shadow-lg`}>
          <div className="flex justify-between items-center bg-blue-500 border-b border-blue-800 px-2 py-1 text-blue-900 font-bold text-xs">
            <span>About_Me.Txt</span>
            <span className="flex space-x-1">
              <button aria-label="minimize" className="w-2 h-2 bg-blue-800 border border-blue-900" onClick={() => setIsMinimized(!isMinimized)}></button>
              <button aria-label="resize" className="w-2 h-2 bg-blue-800 border border-blue-900"></button>
              <button aria-label="close" className="w-2 h-2 bg-blue-800 border border-blue-900"></button>
            </span>
          </div>

          <div className={`bg-blue-100 text-blue-900 text-xs p-2 font-mono border-t border-blue-800 h-48 flex flex-col transition-all duration-500 ease-in-out ${isMinimized ? 'hidden' : 'visible'}`}> {/* Conditional visibility */}
            <div className="flex-1">
              <p className="mb-2 min-h-[1rem]">
                <span className="font-bold text-blue-900">{text}</span>
                <span className="animate-pulse text-blue-700">|</span>
              </p>
              <p className="text-xs leading-relaxed">
                Informatics student passionate about game and web development. Aspiring to become a jack-of-all-trades, blending creativity and logic like a witchcraft spell. Staying authentic above all else, with a soft spot for cowboys and raccoons.
              </p>
            </div>
            
            {/* Download CV Button */}
            <div className="mt-3 pt-2 border-t border-blue-300">
              <button
                onClick={handleDownloadCV}
                className="w-full bg-blue-600 hover:bg-blue-700 text-blue-100 font-bold py-1 px-2 text-xs border border-blue-800 transition-colors duration-200"
                aria-label="Download CV"
              >
                📄 Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;