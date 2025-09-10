import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <div className="flex items-center space-x-6">
        <a href="mailto:ashish@example.com" target="_blank" rel="noreferrer"><FaEnvelope size={28} /></a>
        <a href="https://www.linkedin.com/in/ashish-k-nayak" target="_blank" rel="noreferrer"><FaLinkedin size={28} /></a>
        <span className="text-lg font-medium">+91-XXXXXXXXXX</span>
      </div>
    </section>
  );
};

export default Contact;
