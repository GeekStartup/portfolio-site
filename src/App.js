import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Education from "./components/Education";

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20"> {/* offset for fixed navbar */}
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="skills"><Skills /></section>
        <Education />
        <section id="contact"><Contact /></section>
      </div>
    </>
  );
}

export default App;
