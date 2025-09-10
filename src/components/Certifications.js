import React from "react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const certifications = [
  { title: "Spring Professional", issuer: "Pivotal" },
  { title: "Master Microservices with Spring Boot & Spring Cloud", issuer: "Udemy" },
  { title: "Scrum Master", issuer: "International Scrum Institute" },
  { title: "Scrum Team Member", issuer: "International Scrum Institute" },
];

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" title="Certifications">
      <div className="grid gap-6 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <motion.article
            key={c.title}
            className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
          >
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{c.issuer}</p>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
