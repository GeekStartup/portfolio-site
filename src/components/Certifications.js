import React from "react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Spring Professional",
    issuer: "Pivotal",
    url: "https://bcert.me/slbyhdnua",
  },
  {
    title: "Master Microservices with Spring Boot & Spring Cloud",
    issuer: "Udemy",
    url: "https://www.udemy.com/certificate/UC-4982f6c8-4721-4beb-9476-127c13ed1729/",
  },
  {
    title: "Scrum Master",
    issuer: "International Scrum Institute",
    url: "https://www.scrum-institute.org/badges/88563367742579",
  },
  {
    title: "Scrum Team Member",
    issuer: "International Scrum Institute",
    url: "https://www.scrum-institute.org/badges/32810845400672",
  },
];

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" title="Certifications">
      <div className="grid gap-6 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <motion.a
            key={c.title}
            href={c.url}
            target="_blank"
            rel="noreferrer"
            className="block p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.01 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
          >
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{c.issuer}</p>
            <p className="mt-2 text-sm text-brand">Open credential ↗</p>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  );
}
