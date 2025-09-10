import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="pt-20 py-16 bg-white text-center md:text-left px-6 md:px-20"
    >
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-gray-700 max-w-3xl mx-auto md:mx-0 text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Hi! I’m Ashish Nayak, a Senior Software Engineer with 5+ years of
        experience building scalable web applications using React, Node.js, and
        modern frontend technologies. I love designing clean, efficient, and
        responsive solutions that delight users. Passionate about continuous
        learning and creating elegant software solutions.
      </motion.p>
    </section>
  );
}
