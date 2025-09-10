import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WorkHistory from "./components/WorkHistory";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Languages from "./components/Languages";
import Interests from "./components/Interests";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WorkHistory />
        <Skills />
        <Education />
        <Certifications />
        <Languages />
        <Interests />
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;
