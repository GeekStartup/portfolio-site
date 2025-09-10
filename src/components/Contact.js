import React from "react";
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-16 px-4 md:px-20">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <div className="flex items-center space-x-6">
        <a href="mailto:ashish@example.com">
          <FaEnvelope size={30} />
        </a>
        <a href="https://www.linkedin.com/in/ashish-nayak/" target="_blank" rel="noreferrer">
          <FaLinkedin size={30} />
        </a>
        <span className="flex items-center space-x-2">
          <FaPhone size={30} />
          <span>+91 98765 43210</span>
        </span>
      </div>
    </section>
  );
}

export default Contact;
