// src/components/Education.js
import { motion } from "framer-motion";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Siksha 'O' Anusandhan University, Bhubaneswar",
    period: "2010 – 2012",
    details: [
      "Specialized in software engineering, data structures, and distributed systems.",
      "Completed projects in enterprise web applications and database optimization."
    ]
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Utkal University, Bhubaneswar",
    period: "2007 – 2010",
    details: [
      "Focused on computer science fundamentals, networking, and object-oriented programming.",
      "Graduated with distinction."
    ]
  },
  {
    degree: "Certifications",
    institution: "",
    period: "",
    details: [
      "AWS Certified Solutions Architect – Associate",
      "Oracle Certified Java Programmer",
      "Scrum Alliance Certified ScrumMaster (CSM)"
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 text-gray-800 px-6">
      <motion.h2
        className="text-3xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-10">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl font-semibold text-gray-900">
              {edu.degree}
            </h3>
            {edu.institution && (
              <p className="text-lg text-blue-600">{edu.institution}</p>
            )}
            {edu.period && (
              <p className="text-sm text-gray-500 mb-4">{edu.period}</p>
            )}
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {edu.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
