// src/components/Skills.js
import { motion } from "framer-motion";

const skills = {
  "Technical Skills": [
    "Java, Spring Boot, Microservices",
    "RESTful APIs, GraphQL",
    "AWS (EC2, S3, Lambda, RDS)",
    "Docker, Kubernetes",
    "CI/CD (Jenkins, GitHub Actions, GitLab CI)",
    "SQL, Oracle, MongoDB",
    "JavaScript, React, Node.js",
    "Postman, WireMock, PactFlow (Contract Testing)"
  ],
  "Tools & Practices": [
    "Agile / Scrum methodologies",
    "Test-Driven Development (TDD)",
    "Behavior-Driven Development (BDD)",
    "Git, GitHub, Bitbucket",
    "JIRA, Confluence"
  ],
  "Soft Skills": [
    "Team Leadership & Mentorship",
    "Cross-functional Collaboration",
    "Problem Solving & Debugging",
    "Client Communication",
    "Knowledge Sharing & Documentation"
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white text-gray-800 px-6">
      <motion.h2
        className="text-3xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-600">
              {category}
            </h3>
            <ul className="space-y-2 text-gray-700">
              {items.map((skill, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <span className="text-blue-500">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
