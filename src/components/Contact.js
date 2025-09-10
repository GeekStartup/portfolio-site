import React from "react";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 md:px-0 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <a href="mailto:your.email@example.com" className="flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-full shadow hover:bg-blue-700 transition">
          <FaEnvelope /> Email
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2 bg-primary text-white rounded-full shadow hover:bg-blue-700 transition">
          <FaLinkedin /> LinkedIn
        </a>
        <span className="flex items-center gap-2 px-5 py-2 bg-gray-200 rounded-full shadow">
          <FaPhone /> +91-XXXXXXXXXX
        </span>
      </div>
    </section>
  );
};

export default Contact;
