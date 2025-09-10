import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const roles = [
  {
    title: "Senior Software Engineer (Backend)",
    company: "Maveric Systems → Zeta / HDFC Bank (PayZapp 2.0)",
    location: "Bengaluru, India",
    date: "2022 – Present",
    bullets: [
      "Designed and owned Spring Boot microservices for PayZapp 2.0 across payments, loyalty, and user subsystems.",
      "Maintained 60+ REST APIs with strong reliability; drove p95 latency to < 500ms.",
      "Implemented observability with structured logging, tracing, and alerting.",
      "Hardened CI/CD pipelines with automated quality gates and safe rollout practices.",
      "Mentored engineers on design, testing, and operational readiness.",
    ],
  },
  {
    title: "Senior Development Engineer",
    company: "Maveric Systems — The Family Office",
    location: "Bengaluru, India",
    date: "2021 – 2022",
    bullets: [
      "Delivered 20+ APIs with standardized request/response schemas.",
      "Integrated auth with AWS Cognito and Auth0.",
      "Improved pipelines with code coverage thresholds and static analysis.",
    ],
  },
  {
    title: "DevOps Engineer",
    company: "Tata Consultancy Services — Citi ATM & Banking",
    location: "Pune, India",
    date: "2020",
    bullets: [
      "Streamlined CI/CD workflows, artifact promotions and deployment checks across squads.",
      "Stabilized rollouts, improved monitoring and reduced incident MTTR.",
    ],
  },
  {
    title: "Technical Lead / Senior Developer",
    company: "Tata Consultancy Services — CitiBanamex",
    location: "Pune, India",
    date: "2016 – 2020",
    bullets: [
      "Led a distributed team (60+ members); defined coding standards and review rigor.",
      "Introduced CI/CD, automated testing and quality gates; improved release predictability.",
      "Guided architecture, ownership and knowledge sharing across squads.",
    ],
  },
  {
    title: "Senior Web Developer",
    company: "Tata Consultancy Services",
    location: "India",
    date: "2014 – 2016",
    bullets: [
      "Delivered full-stack features and defect fixes; focused on performance and reliability.",
      "Collaborated with QA and business on acceptance criteria and release readiness.",
    ],
  },
  {
    title: "Junior Developer",
    company: "Tata Consultancy Services",
    location: "India",
    date: "2012 – 2014",
    bullets: [
      "Built and maintained modules; wrote integration tests; assisted with performance profiling.",
      "Participated in code reviews and documentation for continuity.",
    ],
  },
  {
    title: "Infrastructure Technician",
    company: "British Telecom (via TCS)",
    location: "India",
    date: "2011 – 2012",
    bullets: [
      "Supported environment setup and troubleshooting for network/infrastructure components.",
      "Coordinated environment readiness and deployments with dev teams.",
    ],
  },
];

export default function WorkHistory() {
  const [openIndex, setOpenIndex] = useState(0); // first item open by default

  return (
    <SectionWrapper id="work" title="Work History">
      <div className="space-y-4">
        {roles.map((r, i) => (
          <div
            key={`${r.title}-${r.company}-${r.date}`}
            className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center text-left"
            >
              <div>
                <h3 className="text-lg font-semibold">{r.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {r.company} • {r.location} • {r.date}
                </p>
              </div>
              {openIndex === i ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28 }}
                  className="overflow-hidden mt-3"
                >
                  <ul className="list-disc ml-5 text-gray-700 dark:text-gray-200 space-y-1">
                    {r.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
