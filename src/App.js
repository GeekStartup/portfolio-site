import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"; // new
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />         {/* Added */}
      <Experience />
      <Skills />        {/* Moved below Experience */}
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
