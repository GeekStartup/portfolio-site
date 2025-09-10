// src/components/Contact.js
import { FaEnvelope, FaLinkedin, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-12"
    >
      <h2 className="text-4xl font-bold mb-8 text-gray-900">Contact Me</h2>

      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Email */}
        <motion.a
          href="mailto:ashish@example.com"
          className="flex items-center gap-2 text-white bg-blue-600 px-5 py-3 rounded-full shadow hover:bg-blue-700 transition transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaEnvelope /> Email
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/ashish-nayak/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white bg-blue-400 px-5 py-3 rounded-full shadow hover:bg-blue-500 transition transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaLinkedin /> LinkedIn
        </motion.a>

        {/* Phone */}
        <div className="flex items-center gap-2 text-gray-800 bg-gray-200 px-5 py-3 rounded-full shadow">
          <FaPhone /> +91 98765 43210
        </div>
      </div>
    </section>
  );
}
