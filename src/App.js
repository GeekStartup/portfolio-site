import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4">
          <Skills />
        </div>
        <div className="md:w-3/4">
          <Hero />
          <About />
          <Experience />
          <Education />
          <Certifications />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
