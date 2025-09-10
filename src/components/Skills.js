import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Java", "Spring Boot", "React.js", "Node.js", "REST APIs",
  "Microservices", "SQL", "Docker", "Kubernetes", "Git", "Agile"
];

export default function Skills() {
  return (
    <section className="max-w-5xl mx-auto px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-secondary mb-8"
      >
        Skills
      </motion.h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="px-4 py-2 bg-primary text-white rounded-full shadow"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
