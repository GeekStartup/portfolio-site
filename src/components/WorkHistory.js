import React from "react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const roles = [
  // 2022–Present
  {
    title: "Senior Software Engineer (Backend)",
    company: "Maveric Systems → Zeta / HDFC Bank (PayZapp 2.0)",
    location: "Bengaluru, India",
    date: "2022 – Present",
    bullets: [
      "Designed and owned Spring Boot microservices for PayZapp 2.0 across payments, loyalty, and user subsystems.",
      "Maintained 60+ REST APIs with strong reliability; drove p95 latency to < 500ms via caching, pooling and query tuning.",
      "Implemented robust validation, error contracts and observability (structured logging, tracing, alerting).",
      "Hardened CI/CD pipelines with automated quality gates (Sonar), test suites and safe rollout practices.",
      "Collaborated with Zeta/NPCI and HDFC stakeholders, translating business requirements into pragmatic designs.",
      "Mentored engineers on code quality, design patterns, testing discipline and operational readiness.",
    ],
    tech: ["Java", "Spring Boot", "Spring Cloud", "REST", "PostgreSQL", "Redis", "Docker", "CI/CD", "SonarQube"],
  },

  // 2021–2022
  {
    title: "Senior Development Engineer",
    company: "Maveric Systems — The Family Office",
    location: "Bengaluru, India",
    date: "2021 – 2022",
    bullets: [
      "Delivered 20+ region-ready APIs with standardized request/response schemas and versioning strategy.",
      "Integrated authentication/authorization with AWS Cognito and Auth0; enforced security best practices.",
      "Improved developer experience with API guidelines, reusable validators and test scaffolding.",
      "Increased delivery confidence via pipeline automation, code coverage thresholds and static analysis.",
    ],
    tech: ["Java", "Spring Boot", "REST", "AWS Cognito", "Auth0", "JUnit", "Postman", "SonarQube"],
  },

  // 2020
  {
    title: "DevOps Engineer",
    company: "Tata Consultancy Services — Citi ATM & Banking",
    location: "Pune, India",
    date: "2020",
    bullets: [
      "Streamlined CI/CD workflows, artifact promotions and deployment checks across multiple squads.",
      "Partnered with application teams to stabilize rollouts, improve monitoring and reduce incident MTTR.",
    ],
    tech: ["CI/CD", "Jenkins", "Artifact Repos", "Scripting", "Monitoring"],
  },

  // 2016–2020
  {
    title: "Technical Lead / Senior Developer",
    company: "Tata Consultancy Services — CitiBanamex",
    location: "Pune, India",
    date: "2016 – 2020",
    bullets: [
      "Led a distributed team (60+ members) across modules; defined coding standards and code review rigor.",
      "Introduced CI/CD, automated testing and quality gates; improved cadence and release predictability.",
      "Guided architecture decisions, component ownership and knowledge share across squads.",
    ],
    tech: ["Java", "Spring", "Selenium", "Service Virtualization (CA LISA)", "CI/CD"],
  },

  // 2014–2016 (adjust dates as per your resume details)
  {
    title: "Senior Web Developer",
    company: "Tata Consultancy Services",
    location: "India",
    date: "2014 – 2016",
    bullets: [
      "Delivered full-stack features and defect fixes; focused on performance tuning and reliability.",
      "Collaborated with QA and business on acceptance criteria and release readiness.",
    ],
    tech: ["Java", "Web", "SQL", "Testing"],
  },

  // 2012–2014
  {
    title: "Junior Developer",
    company: "Tata Consultancy Services",
    location: "India",
    date: "2012 – 2014",
    bullets: [
      "Built and maintained modules, wrote integration tests, assisted seniors with performance profiling.",
      "Participated in code reviews and documentation for knowledge continuity.",
    ],
    tech: ["Java", "JUnit", "SQL"],
  },

  // 2011–2012
  {
    title: "Infrastructure Technician",
    company: "British Telecom (via TCS)",
    location: "India",
    date: "2011 – 2012",
    bullets: [
      "Supported environment setup, configuration and troubleshooting for network/infrastructure components.",
      "Partnered with dev teams for environment readiness and deployment coordination.",
    ],
    tech: ["Networking", "Environments", "Scripting"],
  },
];

export default function WorkHistory() {
  return (
    // pass replay to animate again when the section re-enters the viewport
    <SectionWrapper id="work" title="Work History" replay>
      <div className="grid gap-6 md:grid-cols-2">
        {roles.map((r, i) => (
          <motion.article
            key={`${r.title}-${r.company}-${r.date}`}
            className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition focus-within:ring-2 ring-brand"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}  // replay on scroll
            transition={{ duration: 0.45, delay: i * 0.06 }}
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

            {r.tech && r.tech.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {r.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 rounded-full bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
