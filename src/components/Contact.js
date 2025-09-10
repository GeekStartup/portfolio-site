// src/components/Contact.js
import React from "react";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-12 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <div className="flex justify-center gap-6">
        <a href="mailto:ashish@example.com" className="text-blue-600 text-2xl hover:text-blue-800">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/ashish-k-nayak/" target="_blank" rel="noreferrer" className="text-blue-600 text-2xl hover:text-blue-800">
          <FaLinkedin />
        </a>
        <span className="text-gray-700 text-xl flex items-center gap-2">
          <FaPhone /> +91 98765 43210
        </span>
      </div>
    </section>
  );
}
