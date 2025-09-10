import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-secondary mb-6"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-gray-600 leading-relaxed"
      >
        Experienced software engineer with expertise in designing and
        implementing scalable solutions across banking, fintech, and digital
        transformation projects. Skilled in full-stack development, API
        integrations, and modern frameworks with a strong focus on clean
        architecture and performance optimization. Passionate about solving
        complex problems and delivering impactful technology solutions.
      </motion.p>
    </section>
  );
}
