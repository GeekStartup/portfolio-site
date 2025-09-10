import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const profileImage =
    "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?w=200&h=200&fit=crop";

  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100 p-5">
      <motion.img
        src={profileImage}
        alt="Profile"
        className="w-48 h-48 rounded-full object-cover shadow-lg mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <h1 className="text-4xl font-bold mb-2">Ashish Nayak</h1>
      <p className="text-xl text-gray-700 mb-4">
        Full Stack Developer | AI Enthusiast | Open Source Contributor
      </p>
      <motion.div
        className="flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a
          href="mailto:ashish@example.com"
          className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/ashish-nayak"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
        >
          LinkedIn
        </a>
        <div className="px-5 py-2 bg-gray-200 text-gray-800 rounded-full">
          +91 98765 43210
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
