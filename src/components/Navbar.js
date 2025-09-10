import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  const links = [
    { name: "Home", href: "hero" },
    { name: "About", href: "about" },
    { name: "Experience", href: "experience" },
    { name: "Education", href: "education" },
    { name: "Certifications", href: "certifications" },
    { name: "Contact", href: "contact" },
  ];

  // Smooth scroll
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  // Highlight active section on scroll
  useEffect(() => {
    const handleActive = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      links.forEach((link) => {
        const section = document.getElementById(link.href);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActive(link.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleActive);
    return () => window.removeEventListener("scroll", handleActive);
  }, []);

  return (
    <nav className="fixed w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-16">
        <div className="text-xl font-bold">Ashish Nayak</div>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.href)}
              className={`${
                active === link.href ? "text-blue-600 font-semibold" : "text-gray-700"
              } hover:text-blue-600 transition`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleScroll(link.href)}
              className={`block w-full text-left px-4 py-3 border-b hover:bg-gray-100 ${
                active === link.href ? "text-blue-600 font-semibold" : "text-gray-700"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
