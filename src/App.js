import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
