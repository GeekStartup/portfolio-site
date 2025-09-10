import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App font-sans text-gray-800">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-4">
        {/* Left Column: Skills */}
        <aside className="md:w-1/4 mb-8 md:mb-0 md:mr-8 sticky top-20">
          <Skills />
        </aside>

        {/* Right Column: Main Content */}
        <main className="md:w-3/4 space-y-16">
          {/* About / Hero already included */}

          {/* Experience + Projects */}
          <section id="experience">
            <Experience />
            <Projects />
          </section>

          {/* Certifications */}
          <section id="certifications">
            <Certifications />
          </section>

          {/* Education */}
          <section id="education">
            <Education />
          </section>

          {/* Contact */}
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
