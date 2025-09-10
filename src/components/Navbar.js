import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["hero", "experience", "certifications", "education", "contact"];

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-xl font-bold cursor-pointer" onClick={() => handleScroll("hero")}>
          Ashish K Nayak
        </div>
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleScroll(link)}
              className="hover:text-blue-600 transition"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col bg-white shadow">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => {
                handleScroll(link);
                setMenuOpen(false);
              }}
              className="py-2 px-4 hover:bg-gray-100 transition"
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
