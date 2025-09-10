import React from "react";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 md:px-16 max-w-4xl mx-auto bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <div className="flex justify-center gap-8">
        <a href="mailto:ashish@example.com" className="flex items-center space-x-2 text-blue-500">
          <FaEnvelope /> <span>Email</span>
        </a>
        <a href="https://www.linkedin.com/in/ashish-k-nayak/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-blue-700">
          <FaLinkedin /> <span>LinkedIn</span>
        </a>
        <div className="flex items-center space-x-2 text-gray-700">
          <FaPhone /> <span>+91 98765 43210</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
