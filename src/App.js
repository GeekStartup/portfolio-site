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
      <div className="md:pl-40">
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </div>
    </>
  );
}

export default App;
