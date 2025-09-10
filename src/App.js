import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <BackToTop />
    </div>
  );
}

export default App;
