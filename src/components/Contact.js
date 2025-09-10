import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="max-w-4xl mx-auto my-12 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <div className="flex justify-center gap-6 items-center">
        <a href="mailto:your.email@example.com" className="text-white bg-blue-600 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
          <FaEnvelope /> Email
        </a>
        <a href="https://www.linkedin.com/in/ashish-nayak" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-800 transition">
          <FaLinkedin /> LinkedIn
        </a>
        <div className="text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 border border-gray-300">
          📞 +91 98765 43210
        </div>
      </div>
    </section>
  );
};

export default Contact;
