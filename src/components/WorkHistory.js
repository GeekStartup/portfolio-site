import React from "react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const roles = [
  {
    title: "Senior Software Engineer (Backend)",
    company: "Maveric Systems → Zeta / HDFC Bank (PayZapp 2.0)",
    location: "Bengaluru, India",
    date: "2022 – Present",
    bullets: [
      "Led Spring Boot microservices for PayZapp 2.0; performance, resilience and security at scale.",
      "Owned 60+ REST endpoints with p95 < 500ms; improved observability and alerting.",
      "Partnered with product, QA, and ops to deliver safely via CI/CD and quality gates.",
    ],
  },
  {
    title: "Senior Development Engineer",
    company: "Maveric Systems — The Family Office",
    location: "Bengaluru, India",
    date: "2021 – 2022",
    bullets: [
      "Designed/implemented 20+ APIs across 2 regions with AWS Cognito/Auth0.",
      "Standardized validation, error handling, and test coverage.",
      "Hardened pipelines using SonarQube rules and automated checks.",
    ],
  },
  {
    title: "DevOps Engineer",
    company: "Tata Consultancy Services — Citi ATM & Banking",
    location: "Pune, India",
    date: "2020",
    bullets: [
      "Streamlined CI/CD workflows, release coordination and deployment reliability.",
      "Collaborated with multiple squads to stabilize production rollouts.",
    ],
  },
  {
    title: "Technical Lead / Senior Developer",
    company: "Tata Consultancy Services — CitiBanamex",
    location: "Pune, India",
    date: "2016 – 2020",
    bullets: [
      "Led 60+ member distributed team; instituted coding standards and ownership.",
      "Introduced CI/CD and improved release cadence, quality and velocity.",
      "Mentored engineers and drove cross-team architecture decisions.",
    ],
  },
  {
    title: "Earlier Roles (Web Dev / Junior Dev / Infrastructure)",
    company: "TCS & British Telecom",
    location: "India",
    date: "2011 – 2016",
    bullets: [
      "Full-stack features, defect fixes, performance tuning and support.",
      "Selenium automation & service virtualization (CA LISA).",
      "Environment setup and infra support (BT).",
    ],
  },
];

export default function WorkHistory() {
  return (
    <SectionWrapper id="work" title="Work History">
      <div className="grid gap-6 md:grid-cols-2">
        {roles.map((r, i) => (
          <motion.article
            key={`${r.title}-${r.company}`}
            className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition focus-within:ring-2 ring-brand"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            tabIndex={0}
          >
            <h3 className="text-xl font-semibold">{r.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {r.company} • {r.location} • {r.date}
            </p>
            <ul className="list-disc ml-5 mt-3 text-gray-700 dark:text-gray-200 space-y-1">
              {r.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
