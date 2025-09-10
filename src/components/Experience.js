import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Consultant",
    company: "Maveric Systems",
    period: "2021 – Present",
    details: [
      "Leading digital transformation projects for banking and financial clients.",
      "Developing scalable APIs and microservices with Spring Boot and Java.",
      "Collaborating with cross-functional teams to deliver high-quality solutions.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Infosys",
    period: "2018 – 2021",
    details: [
      "Built and optimized enterprise-level applications in banking domain.",
      "Worked on React.js and Spring Boot integrations.",
      "Improved system performance and reduced downtime by 20%.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="max-w-5xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center text-secondary mb-10"
      >
        Experience
      </motion.h2>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold text-primary">
              {exp.role} – {exp.company}
            </h3>
            <p className="text-gray-500 mb-3">{exp.period}</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {exp.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
