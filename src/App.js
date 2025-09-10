// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 md:flex md:space-x-8">
        <Skills /> {/* Left sidebar on desktop */}
        <div className="flex-1">
          <Hero />
          <Experience />
          <Education />
          <Certifications />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
