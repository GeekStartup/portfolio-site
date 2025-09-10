import React from "react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const skills = [
  "JavaScript", "TypeScript", "React", "Redux", "Node.js",
  "Express", "REST APIs", "MongoDB", "PostgreSQL",
  "Tailwind CSS", "HTML", "CSS", "Git", "Docker"
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" title="Skills">
      <div className="p-6 rounded-lg shadow-md bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {skills.map((s, i) => (
            <motion.span
              key={s}
              className="inline-block px-3 py-2 rounded-full bg-blue-50 text-blue-800 text-sm font-medium
                         hover:bg-blue-100 transition shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: i * 0.03 }}
            >
              {s}
            </motion.span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
