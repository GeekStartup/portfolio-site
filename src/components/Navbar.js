import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="text-xl font-bold">Ashish Nayak</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-blue-500 transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="absolute top-full left-0 w-full bg-white flex flex-col items-center py-4 space-y-4 md:hidden shadow-lg">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-blue-500 transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
