// src/components/Contact.js
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: integrate EmailJS or API
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-12"
    >
      <h2 className="text-4xl font-bold mb-8 text-gray-900">Contact Me</h2>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <a
          href="mailto:ashish@example.com"
          className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition transform hover:scale-105"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/ashish-nayak/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-400 text-white rounded-full shadow hover:bg-blue-500 transition transform hover:scale-105"
        >
          LinkedIn
        </a>
        <a
          href="tel:+919876543210"
          className="px-6 py-3 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition transform hover:scale-105"
        >
          Call
        </a>
      </div>

      {/* Contact Form */}
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            required
          />
          <motion.button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      ) : (
        <p className="text-green-600 font-semibold mt-6 text-lg">
          Thank you! Your message has been sent.
        </p>
      )}
    </section>
  );
}
