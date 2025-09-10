import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App font-sans">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
}

export default App;
