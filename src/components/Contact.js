import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="my-12">
      <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
      <div className="flex flex-col md:flex-row gap-4">
        <a
          href="mailto:ashish@example.com"
          className="px-5 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
        >
          Email
        </a>
        <a
          href="https://linkedin.com/in/ashishnayak"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2 bg-gray-200 text-gray-900 rounded-full shadow hover:bg-gray-300 transition"
        >
          LinkedIn
        </a>
        <div className="px-5 py-2 bg-gray-100 rounded-full shadow flex items-center">
          📞 +91-XXXXXXXXXX
        </div>
      </div>
    </section>
  );
}
