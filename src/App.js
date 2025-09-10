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
    <div className="App font-sans text-gray-800">
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="about" className="mt-20">
        <About />
      </section>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto mt-16 px-4 md:px-8 gap-8">
        <aside className="md:w-1/4">
          <Skills />
        </aside>

        <main className="md:w-3/4 space-y-12">
          <section id="experience">
            <Experience />
          </section>

          <section id="education">
            <Education />
          </section>

          <section id="certifications">
            <Certifications />
          </section>
        </main>
      </div>

      <section id="contact" className="mt-16 px-4 md:px-8">
        <Contact />
      </section>
    </div>
  );
}

export default App;
