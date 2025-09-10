import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="p-6 md:p-16 bg-blue-100 text-blue-900">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Email */}
        <a
          href="mailto:ashish@example.com"
          className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          <FaEnvelope /> Email
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/ashish-k-nayak"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          <FaLinkedin /> LinkedIn
        </a>

        {/* Phone */}
        <div className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-full shadow">
          <span>📞</span>
          <span>+91-XXXXXXXXXX</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
