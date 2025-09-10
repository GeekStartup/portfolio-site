import React from "react";

const sections = ["hero", "about", "skills", "experience", "projects", "education", "certifications", "contact"];

const Navbar = () => {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">Ashish Nayak</div>
        <ul className="hidden md:flex gap-6">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
