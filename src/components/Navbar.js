import React from "react";

const links = ["hero", "about", "skills", "experience", "education", "certifications", "contact"];

const Navbar = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-bold text-xl cursor-pointer" onClick={() => scrollTo("hero")}>
          Ashish
        </div>
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link} className="cursor-pointer hover:text-blue-500" onClick={() => scrollTo(link)}>
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
