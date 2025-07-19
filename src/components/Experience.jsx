// src/components/Experience.jsx
import React, { useState } from 'react';
import Techx from '../assets/techx.jpg';
import TemuAlumni from '../assets/TemuAlumni.png';

// You can import your actual images here once they are in src/assets
// import TechExploreImage from '../assets/tech-explore.png'; // Example
// import SocialProjectImage from '../assets/social-project.png'; // Example

const experiences = [
  {
    id: 1,
    title: 'Decoration, Member, PUMA Informatics X PUMA Information System Tech Exploration 2024',
    duration: 'Jun 2024-Oct 2024',
    description: [
      'Worked collaboratively to create concept visual themes.',
      'Created custom event props needed to match the design direction.',
      'Assisted in venue and stage decoration for the Computer Science student event.',
    ],
    type: 'image', // Set type to 'image'
    imageUrl: Techx, // Placeholder image
  },
  {
    id: 2,
    title: 'Volunteer, Documentation Team, Social Project, Pulau Pramuka',
    duration: 'May 2024-Jun 2024',
    description: [
      'Designed banner and visual material for the exhibition.',
      'Edited recap videos and assisted in documentation during the event.',
      'Participated in mangrove planting activities on Pulau Pramuka as part of a group project environmental initiative.',
    ],
    type: 'video',
    embedUrl: 'https://www.youtube.com/embed/BLLQIHAuIlQ?si=EfuG7_SsRdqhIHTI',
  },
  {
    id: 3,
    title: 'Event Organizer, Person in Charge (PIC), PUMA Informatics Temu Alumni 2024',
    duration: 'Feb 2024 - May 2024',
    description: [
      'Curated the event theme and selected 2 alumni speakers aligned with the event\'s theme and goals.',
      'Designed the event rundown and managed venue setup and logistics.',
      'The event resulted in student access to a free Google Cloud bootcamp via Digitalent.',
    ],
    type: 'image',
    imageUrl: TemuAlumni,
  },
  {
    id: 4,
    title: 'Web Developer, Developer Team, WeBage Liber',
    duration: 'Sep 2022-Dec 2022',
    description: [
      'Developed a prototype school library website using HTML, CSS, and PHP.',
      'Built core page structures, styled front-end layout using Bootstrap, and implemented basic CRUD functions and form handling.',
      'Collaborated with school library staff to gather feedback and improve usability.',
    ],
    type: 'image', // Set type to 'image'
    imageUrl: 'https://via.placeholder.com/640x360/87CEFA/000000?text=WeBage+Liber+Project', // Placeholder image
  },
  {
    id: 5,
    title: 'Intern, Administrative Assistant, Teluk Pucung Sub-District Office',
    duration: 'Jan 2022 – Apr 2022',
    description: [
      'Organized and processed administrative documents for 30+ residents per day.',
      'Inputted and recapped PBB (Land and Building Tax) data from Excel into the government database system.',
      'Handled data entry for 4 RW, covering 40-120 RT and up to 1,600+ resident entries in total.',
    ],
    type: 'image', // Set type to 'image'
    imageUrl: 'https://via.placeholder.com/640x360/87CEFA/000000?text=WeBage+Liber+Project', // Placeholder image
  },
];

const Experience = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0);

  const goToNext = () => {
    setCurrentExperienceIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  };

  const goToPrevious = () => {
    setCurrentExperienceIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  };

  const currentExperience = experiences[currentExperienceIndex];

  return (
    <div className="flex justify-center w-full mt-4 px-4">
      <div className={`bg-blue-600 border-2 border-blue-800 w-full max-w-4xl shadow-xl transition-all duration-500 ease-in-out ${isMinimized ? 'h-10' : 'h-auto'}`}>
        <div className="flex justify-between items-center bg-blue-500 border-b-2 border-blue-800 px-3 py-1 text-blue-900 font-bold text-xs uppercase">
          <span>Experience_Log.DB</span>
          <span className="flex space-x-1">
            <button aria-label="minimize" className="w-3 h-3 bg-blue-800 border border-blue-900" onClick={() => setIsMinimized(!isMinimized)}></button>
            <button aria-label="resize" className="w-3 h-3 bg-blue-800 border border-blue-900"></button>
            <button aria-label="close" className="w-3 h-3 bg-blue-800 border border-blue-900"></button>
          </span>
        </div>

        <div className={`bg-blue-100 text-blue-900 text-xs p-4 font-mono border-t border-blue-800 transition-all duration-500 ease-in-out ${isMinimized ? 'hidden' : 'visible'}`}>
          {experiences.length > 0 ? (
            <>
              {/* Carousel Navigation */}
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={goToPrevious}
                  className="px-3 py-1 border bg-blue-800 text-blue-100 text-xs whitespace-nowrap"
                >
                  ◀ Previous
                </button>
                <h2 className="text-sm font-bold text-blue-900 uppercase text-center">
                  {currentExperience.title}
                </h2>
                <button
                  onClick={goToNext}
                  className="px-3 py-1 border bg-blue-800 text-blue-100 text-xs whitespace-nowrap"
                >
                  Next ▶
                </button>
              </div>

              {/* Experience Display Area */}
              <div className="mb-4 text-center">
                {currentExperience.type === 'image' && currentExperience.imageUrl && (
                  <div className="relative w-full mb-4" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
                    <img
                      src={currentExperience.imageUrl}
                      alt={currentExperience.title}
                      className="absolute top-0 left-0 w-full h-full object-cover border border-blue-300"
                    />
                  </div>
                )}

                {currentExperience.type === 'video' && currentExperience.embedUrl && (
                  <div className="relative w-full mb-4" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
                    <iframe
                      src={currentExperience.embedUrl}
                      allowFullScreen
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      className="absolute top-0 left-0 border border-blue-300"
                      title={currentExperience.title}
                    ></iframe>
                  </div>
                )}

                <p className="text-blue-700 mb-2">{currentExperience.duration}</p>
                <ul className="list-disc list-inside text-left space-y-1">
                  {currentExperience.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <p className="text-center">No experience to display yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;