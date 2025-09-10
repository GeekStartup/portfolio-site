import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "skills", "experience", "education", "certifications", "contact"];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActive(section);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", id: "hero" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Certifications", id: "certifications" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
        <div className="font-bold text-xl">Ashish Nayak</div>
        <ul className="flex space-x-6">
          {links.map(link => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`hover:text-blue-600 ${active === link.id ? "text-blue-600 font-semibold" : "text-gray-800"}`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
