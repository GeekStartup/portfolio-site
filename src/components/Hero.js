import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col md:flex-row items-center mt-20 md:mt-32">
      <motion.img
        src="/profile.jpg"
        alt="Profile"
        className="w-40 h-40 rounded-full shadow-lg mb-6 md:mb-0 md:mr-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h1 className="text-4xl font-bold mb-4">Ashish Nayak</h1>
        <p className="text-lg mb-4">
          Full Stack Developer | React | Node.js | Modern Web Apps
        </p>
        <div className="flex space-x-4">
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
      </motion.div>
    </section>
  );
}
