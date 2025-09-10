import React from "react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Senior Software Engineer (Backend)",
    company: "Maveric Systems → Zeta / HDFC Bank (PayZapp 2.0)",
    location: "Bengaluru, India",
    date: "2022 – Present",
    description:
      "Led Spring Boot microservices for PayZapp 2.0 handling scale, security, and API performance.",
    projects: [
      "Owned & maintained 60+ REST endpoints with SLO targets (<500ms p95)",
      "Migrated large user base (3+ crore) and integrated with payments/loyalty flows",
      "Improved observability, code quality gates, and deployment safety in CI/CD",
    ],
  },
  {
    title: "Senior Development Engineer",
    company: "Maveric Systems — The Family Office",
    location: "Bengaluru, India",
    date: "2021 – 2022",
    description:
      "Delivered region-ready APIs with modern auth and rollout practices.",
    projects: [
      "Designed & delivered 20+ API endpoints across 2 regions",
      "Implemented auth with AWS Cognito / Auth0; standardized request validation",
      "Strengthened pipelines with automated testing and Sonar quality gates",
    ],
  },
  {
    title: "DevOps Engineer",
    company: "Tata Consultancy Services — Citi ATM & Banking",
    location: "Pune, India",
    date: "2020",
    description:
      "Focused on CI/CD enablement, reliability, and cross-team delivery support.",
    projects: [
      "Optimized release workflows and automated validations in pipelines",
      "Partnered with multiple app squads to stabilize deployments",
    ],
  },
  {
    title: "Technical Lead / Senior Developer",
    company: "Tata Consultancy Services — CitiBanamex",
    location: "Pune, India",
    date: "2016 – 2020",
    description:
      "Led large cross-functional team, modernized delivery, and mentored engineers.",
    projects: [
      "Led a 60+ member distributed team across modules; defined coding standards",
      "Introduced CI/CD & code quality practices; improved release cadence",
      "Guided component ownership and knowledge sharing",
    ],
  },
  {
    title: "Previous Roles",
    company: "TCS & British Telecom",
    location: "India",
    date: "2011 – 2016",
    description:
      "Progressed through roles as Senior Web Developer, Junior Developer, and Infrastructure Technician.",
    projects: [
      "Full-stack features, defect fixes, and performance tuning",
      "Selenium automation, service virtualization (CA LISA)",
      "Environment setup and network/infrastructure support (BT)",
    ],
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience" title="Experience & Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((exp, i) => (
          <motion.article
            key={`${exp.title}-${exp.company}`}
            className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {exp.company} • {exp.location} • {exp.date}
            </p>
            <p className="mt-3 text-gray-700 dark:text-gray-200">{exp.description}</p>

            {exp.projects && (
              <ul className="list-disc ml-5 mt-3 text-gray-600 dark:text-gray-300">
                {exp.projects.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            )}
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
