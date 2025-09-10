import React, { useState, useEffect } from "react";

const links = ["hero", "experience", "skills", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 ${
        scrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur-md"
      } transition`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <div
          className="text-xl font-bold cursor-pointer"
          onClick={() => scrollTo("hero")}
        >
          Ashish K Nayak
        </div>
        <div className="hidden md:flex gap-6">
          {links.map((l) => (
            <button
              key={l}
              className="text-gray-700 hover:text-primary font-medium"
              onClick={() => scrollTo(l)}
            >
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </button>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <span className="text-2xl">✖</span> : <span className="text-2xl">☰</span>}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <button
                key={l}
                className="text-gray-700 hover:text-primary text-left font-medium"
                onClick={() => scrollTo(l)}
              >
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
