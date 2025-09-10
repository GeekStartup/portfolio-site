import React from "react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const education = [
  {
    degree: "B.Tech in Electrical Engineering",
    institution: "Orissa Engineering College",
    period: "2007 – 2011",
    details:
      "Focused on core engineering fundamentals with a strong interest in software systems and problem solving.",
  },
];

export default function Education() {
  return (
    <SectionWrapper id="education" title="Education">
      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((ed, i) => (
          <motion.article
            key={ed.degree}
            className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
          >
            <h3 className="text-xl font-semibold">{ed.degree}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {ed.institution} • {ed.period}
            </p>
            {ed.details && (
              <p className="mt-3 text-gray-700 dark:text-gray-200">{ed.details}</p>
            )}
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
