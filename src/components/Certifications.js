import React from "react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const certifications = [
  { title: "React Developer Certificate", issuer: "Coursera", year: "2022" },
  { title: "Full Stack Web Development", issuer: "Udemy", year: "2021" },
];

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" title="Certifications">
      <div className="grid gap-6 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <motion.article
            key={c.title}
            className="p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="text-gray-600">{c.issuer} • {c.year}</p>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
