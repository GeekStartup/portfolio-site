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
    <div className="font-sans text-gray-800">
      <Navbar />
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto pt-20">
        <aside className="lg:w-1/4 p-4">
          <Skills />
        </aside>
        <main className="lg:w-3/4">
          <Hero />
          <Experience />
          <Education />
          <Certifications />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App; // ✅ Make sure to export the App component
