import React from "react";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4 flex flex-col items-center text-center">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <div className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 items-center">
        <a
          href="mailto:your.email@example.com"
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          <FaEnvelope className="mr-2" /> Email
        </a>
        <a
          href="https://www.linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          <FaLinkedin className="mr-2" /> LinkedIn
        </a>
        <div className="flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-full">
          <FaPhone className="mr-2" /> +91 98765 43210
        </div>
      </div>
    </div>
  );
};

export default Contact;
