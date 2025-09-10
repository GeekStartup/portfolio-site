// src/components/Projects.js
import { motion } from "framer-motion";

const projects = [
  {
    name: "Banking Microservices Platform",
    description:
      "Designed and implemented a scalable microservices architecture for a leading bank, integrating multiple internal and external services including VISA and MasterCard networks.",
    tech: ["Java", "Spring Boot", "Docker", "Kubernetes", "AWS"],
    link: "#"
  },
  {
    name: "Digital Payments Gateway",
    description:
      "Developed a secure payments gateway for online transactions, including PCI-DSS compliance and automated testing with PactFlow and WireMock.",
    tech: ["Java", "Spring Boot", "Postman", "PactFlow", "React"],
    link: "#"
  },
  {
    name: "Portfolio Management Tool",
    description:
      "Created a tool to manage customer portfolios and track transactions with interactive dashboards, data visualizations, and reporting.",
    tech: ["React", "Node.js", "MongoDB", "AWS Lambda", "CI/CD"],
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 text-gray-800 px-6">
      <motion.h2
        className="text-3xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              {project.name}
            </h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((techItem, i) => (
                <span
                  key={i}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {techItem}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                className="text-blue-600 hover:underline font-semibold"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
