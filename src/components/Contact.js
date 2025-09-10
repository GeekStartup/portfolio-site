import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="pt-20 py-16 bg-white text-center">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact
      </motion.h2>
      <motion.p
        className="text-gray-700 mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        You can reach me via email
      </motion.p>
      <motion.a
        href="mailto:ashish.nayak@example.com"
        className="px-5 py-2 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition transform hover:scale-105"
      >
        Send Email
      </motion.a>
    </section>
  );
}
