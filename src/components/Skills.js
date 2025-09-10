import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = ["React", "Node.js", "Tailwind", "JavaScript", "TypeScript"];

  return (
    <section id="skills" className="pt-20 py-16 bg-white text-center">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Skills
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill, idx) => (
          <motion.span
            key={idx}
            className="px-4 py-2 rounded-full bg-secondary hover:bg-blue-200 transform hover:scale-110 transition cursor-pointer"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
