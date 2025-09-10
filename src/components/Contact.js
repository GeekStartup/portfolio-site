import React from "react";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0">
        <a
          href="mailto:ashish@example.com"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <FaEnvelope /> <span>Email</span>
        </a>
        <a
          href="https://linkedin.com/in/ashish"
          target="_blank"
          rel="noreferrer"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <FaLinkedin /> <span>LinkedIn</span>
        </a>
        <div className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-lg">
          <FaPhone /> <span>+91 9876543210</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
