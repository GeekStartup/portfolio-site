import React from "react";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-50 px-4 md:px-20 py-12 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <div className="flex justify-center space-x-6">
        <a href="mailto:ashish.nayak@example.com" className="text-blue-500 hover:text-blue-700 text-2xl"><FaEnvelope /></a>
        <a href="https://linkedin.com/in/ashish-nayak" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 text-2xl"><FaLinkedin /></a>
        <span className="flex items-center text-gray-700 text-xl"><FaPhone className="mr-2" /> +91-XXXXXXXXXX</span>
      </div>
    </section>
  );
};

export default Contact;
