// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
// import ComingSoon from './components/ComingSoon'; // Commented out as per previous context
import About from './components/About';
import TechStack from './components/TechStack';
import ProjectsShowcase from './components/ProjectShowcase';
import Contact from './components/Contact'; // New import for Contact component

export default function App() {
  return (
    <div className="min-h-screen bg-[#1d3e69]">
      <Navbar />
      {/* <ComingSoon /> */}
      <section id="about" className="py-1"> {/* Added id and padding */}
        <About/>
      </section>
      <section id="projects" className="py-2"> {/* Added id and padding */}
        <TechStack/>
        <ProjectsShowcase/>
      </section>
      <section id="contact" className="py-2"> {/* New Contact section with id and padding */}
        <Contact/>
      </section>
    </div>
  );
}