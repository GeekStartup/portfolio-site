import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="pt-20 py-16 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="text-gray-700 mb-4">You can reach me via email</p>
      <a
        href="mailto:your.email@example.com"
        className="px-5 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition transform hover:scale-105"
      >
        Email Me
      </a>
    </section>
  );
}
