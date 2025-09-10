// src/components/Experience.js
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Maveric Systems",
    period: "2019 – Present",
    details: [
      "Lead design and development of enterprise-grade banking applications with focus on scalability and security.",
      "Collaborate with cross-functional teams to deliver digital transformation projects for financial institutions.",
      "Implement microservices-based architecture and CI/CD pipelines to accelerate releases.",
      "Mentor junior developers, conduct code reviews, and establish engineering best practices."
    ]
  },
  {
    role: "Software Engineer",
    company: "Infosys",
    period: "2012 – 2019",
    details: [
      "Developed full-stack applications across retail banking and payments domains.",
      "Worked on integrations with VISA and MasterCard networks, ensuring compliance with industry standards.",
      "Enhanced application performance by optimizing backend services and database queries.",
      "Contributed to agile ceremonies and collaborated with global teams."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white text-gray-800 px-6">
      <motion.h2
        className="text-3xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold text-gray-900">
              {exp.role} – <span className="text-blue-600">{exp.company}</span>
            </h3>
            <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {exp.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
