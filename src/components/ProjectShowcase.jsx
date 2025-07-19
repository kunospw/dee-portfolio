// src/components/ProjectShowcase.jsx
import React, { useState } from 'react';
import Hanoman from '../assets/Hanoman.png';
import Faeza from '../assets/Webapp1.png';
import Foxie from '../assets/Foxie.png';
import Design from '../assets/Design.png';

const projects = [
  {
    id: 1,
    name: 'Faeza Store Web App',
    type: 'web',
    imageUrl: Faeza, // 16:9 aspect ratio
    url: 'https://reseller-shop-project.vercel.app/',
    description: 'A form-based e-commerce site with an admin dashboard for product management using React.',
  },
  {
    id: 2,
    name: 'Hanoman Adventure',
    type: 'game',
    imageUrl: Hanoman, // 16:9 aspect ratio
    embedUrl: 'https://itch.io/embed-upload/14241671?color=bababa', // Placeholder for game embed
    description: 'Story of hanoman in a pixel-art platformer game developed in Unity.',
  },
  {
    id: 3,
    name: 'Blessed Are the Peacemakers',
    type: 'game',
    imageUrl: 'https://via.placeholder.com/640x360/ffb6c1/000000?text=Mobile+App+1', // 16:9 aspect ratio
    embedUrl: 'https://itch.io/embed-upload/14252047?color=333333',
    description: 'Follow the story of Avery Ross, a woman who seeks justice for a crime she did not commit.',
  },
  {
    id: 4,
    name: 'Foxie Website',
    type: 'web',
    imageUrl: Foxie,
    url: 'https://foxie-app.vercel.app/',
    description: 'A student productivity platform.',
  },
  {
    id: 5,
    name: 'Informatics Instagram Post Design',
    type: 'web',
    imageUrl: Design,
    url: 'https://www.instagram.com/informatics_presuniv/',
    description: 'Design for Informatics Instagram Post.',
  },
  // New entry for video content - you can modify this!
  // {
  //   id: 6,
  //   name: 'My Awesome Video Demo',
  //   type: 'video', // Set this type to 'video'
  //   imageUrl: 'https://via.placeholder.com/640x360/cccccc/000000?text=Video+Thumbnail', // Optional thumbnail
  //   embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace this with your actual video or Instagram embed URL
  //   description: 'A demonstration of my skills in action. This can be a YouTube video, Vimeo, or even an Instagram video embed.',
  // },
];

const ProjectsShowcase = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false); // New state for minimization

  const goToNext = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const goToPrevious = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <div className="flex justify-center w-full mt-4 px-4">
      <div className={`bg-blue-600 border-2 border-blue-800 w-full max-w-4xl shadow-xl transition-all duration-500 ease-in-out ${isMinimized ? 'h-10' : 'h-auto'}`}> {/* Increased max-w, added transition and conditional height */}
        <div className="flex justify-between items-center bg-blue-500 border-b-2 border-blue-800 px-3 py-1 text-blue-900 font-bold text-xs uppercase">
          <span>Projects_Log.DB</span>
          <span className="flex space-x-1">
            <button aria-label="minimize" className="w-3 h-3 bg-blue-800 border border-blue-900" onClick={() => setIsMinimized(!isMinimized)}></button>
            <button aria-label="resize" className="w-3 h-3 bg-blue-800 border border-blue-900"></button>
            <button aria-label="close" className="w-3 h-3 bg-blue-800 border border-blue-900"></button>
          </span>
        </div>

        <div className={`bg-blue-100 text-blue-900 text-xs p-4 font-mono border-t border-blue-800 transition-all duration-500 ease-in-out ${isMinimized ? 'hidden' : 'visible'}`}> {/* Conditional visibility */}
          {projects.length > 0 ? (
            <>
              {/* Carousel Navigation */}
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={goToPrevious}
                  className="px-3 py-1 border bg-blue-800 text-blue-100 text-xs whitespace-nowrap"
                >
                  ◀ Previous
                </button>
                <h2 className="text-sm font-bold text-blue-900 uppercase">
                  {currentProject.name}
                </h2>
                <button
                  onClick={goToNext}
                  className="px-3 py-1 border bg-blue-800 text-blue-100 text-xs whitespace-nowrap"
                >
                  Next ▶
                </button>
              </div>

              {/* Project Display Area */}
              <div className="mb-4">
                {currentProject.type === 'web' && (
                  <div>
                    <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
                      <a href={currentProject.url} target="_blank" rel="noopener noreferrer" className="absolute top-0 left-0 w-full h-full block">
                        <img
                          src={currentProject.imageUrl}
                          alt={currentProject.name}
                          className="w-full h-full object-cover"
                        />
                      </a>
                    </div>
                    <p className="mt-2 text-justify">{currentProject.description}</p>
                    <p className="mt-2">
                      <a href={currentProject.url} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                        Visit Website
                      </a>
                    </p>
                  </div>
                )}

                {currentProject.type === 'game' && (
                  <div>
                    <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
                      <iframe
                        src={currentProject.embedUrl}
                        allowFullScreen
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        className="absolute top-0 left-0"
                        title={currentProject.name}
                      ></iframe>
                    </div>
                    <p className="mt-2 text-justify">{currentProject.description}</p>
                    <p className="mt-2">
                      You can play the game directly above! Go fullscreen if the resulution doesnt fit your screen.
                    </p>
                  </div>
                )}

                {currentProject.type === 'mobile' && (
                  <div>
                    <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
                      <img
                        src={currentProject.imageUrl}
                        alt={currentProject.name}
                        className="w-full h-full object-cover absolute top-0 left-0"
                      />
                    </div>
                    <p className="mt-2 text-justify">{currentProject.description}</p>
                    <div className="grid grid-cols-2 gap-2 mt-4">
                      {currentProject.screenshots.map((screenshot, idx) => (
                        <img key={idx} src={screenshot} alt={`Screenshot ${idx + 1}`} className="w-full h-auto object-contain border border-blue-300" />
                      ))}
                    </div>
                  </div>
                )}

                {currentProject.type === 'video' && ( // New block for video content
                  <div>
                    <div className="relative w-full" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
                      <iframe
                        src={currentProject.embedUrl}
                        allowFullScreen
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        className="absolute top-0 left-0"
                        title={currentProject.name}
                      ></iframe>
                    </div>
                    <p className="mt-2 text-justify">{currentProject.description}</p>
                    <p className="mt-2">
                      Watch the video directly above!
                    </p>
                  </div>
                )}
              </div>
            </>
          ) : (
            <p className="text-center">No projects to display yet. Add some!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsShowcase;