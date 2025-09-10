import React, { useState, useEffect } from "react";

const links = [
  { name: "Home", href: "#hero" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => document.querySelector(link.href));
      const scrollPos = window.scrollY + 100;
      for (let i = 0; i < sections.length; i++) {
        if (sections[i] && scrollPos >= sections[i].offsetTop) {
          setActive(links[i].name);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        <div className="font-bold text-xl">Ashish Nayak</div>
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`hover:text-blue-500 ${
                active === link.name ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <span className="text-2xl">&#9776;</span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white shadow flex flex-col px-4 py-2 space-y-2">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`hover:text-blue-500 ${
                active === link.name ? "text-blue-600 font-semibold" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
