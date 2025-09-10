import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <div className="flex flex-col lg:flex-row lg:gap-8">
        <Skills />
        <div className="flex-1 space-y-8">
          <Experience />
          <Projects />
          <Education />
          <Certifications />
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default App;
