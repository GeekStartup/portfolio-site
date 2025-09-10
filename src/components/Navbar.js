import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold">Ashish Nayak</div>
        <div className="space-x-4 hidden md:flex">
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">Home</Link>
          <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">Skills</Link>
          <Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">Experience</Link>
          <Link to="education" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">Education</Link>
          <Link to="certifications" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">Certifications</Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
