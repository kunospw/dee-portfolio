// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import ProjectsShowcase from './components/ProjectShowcase';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1d3e69]">
      <Navbar />
      <section id="about">
        <About/>
        <TechStack/>
      </section>
      <section id="experience">
        <Experience/>
      </section>
      <section id="projects">
        <ProjectsShowcase/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
    </div>
  );
}