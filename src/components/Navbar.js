import React from "react";

const Navbar = () => {
  const links = ["hero", "experience", "certifications", "education", "contact"];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-end p-4 space-x-6">
        {links.map((link) => (
          <button
            key={link}
            className="text-gray-700 hover:text-blue-600 font-medium"
            onClick={() => handleScroll(link)}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
