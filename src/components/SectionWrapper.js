import React from "react";
import { motion } from "framer-motion";

export default function SectionWrapper({ id, title, children }) {
  return (
    <motion.section
      id={id}
      className="max-w-6xl mx-auto px-6 lg:px-8 py-14 border-t"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {title && (
        <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-blue-600 inline-block pb-1">
          {title}
        </h2>
      )}
      {children}
    </motion.section>
  );
}
