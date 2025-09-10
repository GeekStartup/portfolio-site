import React from "react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "XYZ University",
    period: "2017 – 2021",
    details:
      "Focused on software engineering, web technologies, and data structures. Led a capstone project building a full-stack app."
  },
];

export default function Education() {
  return (
    <SectionWrapper id="education" title="Education">
      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((ed, i) => (
          <motion.article
            key={ed.degree}
            className="p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <h3 className="text-xl font-semibold">{ed.degree}</h3>
            <p className="text-gray-600">{ed.institution} • {ed.period}</p>
            {ed.details && <p className="mt-3 text-gray-700">{ed.details}</p>}
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
