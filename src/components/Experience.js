import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    { title: "Software Engineer", company: "Company A", period: "2022 - Present" },
    { title: "Frontend Developer", company: "Company B", period: "2020 - 2022" },
  ];

  return (
    <section id="experience" className="pt-20 py-16 bg-gray-50 text-center">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Experience
      </motion.h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transform hover:-translate-y-2 transition"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-gray-500">{exp.period}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
