import React from "react";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

const Contact = () => (
  <section id="contact" className="py-12 text-center">
    <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
    <div className="flex justify-center space-x-4">
      <a href="mailto:ashish@example.com" className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
        <FaEnvelope /> <span>Email</span>
      </a>
      <a href="https://www.linkedin.com/in/ashish-k-nayak/" target="_blank" rel="noreferrer" className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        <FaLinkedin /> <span>LinkedIn</span>
      </a>
      <span className="flex items-center space-x-2 px-4 py-2 bg-gray-200 text-black rounded">
        <FaPhone /> <span>+91 12345 67890</span>
      </span>
    </div>
  </section>
);

export default Contact;
