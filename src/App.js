import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Navbar />
      <main className="mt-16">
        <Hero />
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
