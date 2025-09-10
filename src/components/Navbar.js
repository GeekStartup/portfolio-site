import React, { useState } from "react";

const links = ["hero", "skills", "experience", "education", "certifications", "contact"];

function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="font-bold text-xl cursor-pointer" onClick={() => scrollTo("hero")}>Ashish</div>
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <button key={link} onClick={() => scrollTo(link)} className="hover:text-blue-600 transition">{link.charAt(0).toUpperCase() + link.slice(1)}</button>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>☰</button>
      </div>
      {open && (
        <div className="flex flex-col items-center bg-white shadow-md md:hidden py-4">
          {links.map((link) => (
            <button key={link} onClick={() => scrollTo(link)} className="py-2">{link.charAt(0).toUpperCase() + link.slice(1)}</button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
