import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "React",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "AWS",
    "HTML",
    "CSS"
  ];

  return (
    <section id="skills" className="pt-20 py-16 bg-gray-50 text-center px-6 md:px-20">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h2>
      <motion.div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <motion.div
            key={skill}
            className="px-4 py-2 bg-gray-100 rounded-full shadow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
