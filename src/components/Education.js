import React from "react";
import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science",
    institution: "Biju Patnaik University of Technology (BPUT)",
    period: "2014 – 2018",
    details: [
      "Graduated with distinction.",
      "Focused on software engineering, algorithms, and distributed systems.",
    ],
  },
];

export default function Education() {
  return (
    <section className="max-w-5xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-secondary mb-10"
      >
        Education
      </motion.h2>
      <div className="space-y-8">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
            <p className="text-gray-500 mb-2">{edu.institution}</p>
            <p className="text-gray-400 mb-3">{edu.period}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {edu.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
