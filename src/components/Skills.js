import React from "react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const groups = [
  {
    name: "Languages & Frameworks",
    items: ["Java", "Spring Boot", "Spring Cloud", "REST", "Microservices", "JUnit"],
  },
  {
    name: "DevOps & Quality",
    items: ["CI/CD", "Jenkins", "SonarQube", "Selenium", "Service Virtualization (CA LISA)"],
  },
  {
    name: "Cloud & Auth",
    items: ["AWS (Cognito)", "Auth0"],
  },
  {
    name: "Frontend & Tooling",
    items: ["React (basics)", "Git", "Postman", "Eclipse/IntelliJ"],
  },
];

export default function Skills() {
  return (
    <SectionWrapper id="skills" title="Skills">
      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((g, gi) => (
          <motion.div
            key={g.name}
            className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: gi * 0.05 }}
          >
            <h4 className="font-semibold mb-3">{g.name}</h4>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s, i) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200 text-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
