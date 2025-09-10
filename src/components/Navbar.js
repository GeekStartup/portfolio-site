import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">Ashish Nayak</div>
        <div className="hidden md:flex gap-6">
          <a href="#hero" className="hover:text-primary">Home</a>
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#experience" className="hover:text-primary">Experience</a>
          <a href="#skills" className="hover:text-primary">Skills</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </div>
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-white">
          <a href="#hero" className="hover:text-primary">Home</a>
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#experience" className="hover:text-primary">Experience</a>
          <a href="#skills" className="hover:text-primary">Skills</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </div>
      )}
    </nav>
  );
}
