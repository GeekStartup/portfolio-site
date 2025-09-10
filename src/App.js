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
    <div className="App font-sans">
      <Navbar />
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-4">
        <div className="md:w-1/4">
          <Skills />
        </div>
        <div className="md:w-3/4">
          <Hero />
          <Experience />
          <Certifications />
          <Education />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
