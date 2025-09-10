import React from "react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const langs = [
  { name: "Odia", level: "Native" },
  { name: "Hindi", level: "Fluent" },
  { name: "English", level: "Fluent" },
  { name: "Bengali", level: "Basic" },
  { name: "Spanish", level: "Basic" },
];

export default function Languages() {
  return (
    <SectionWrapper id="languages" title="Languages">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {langs.map((l, i) => (
          <motion.div
            key={l.name}
            className="p-4 rounded-lg shadow bg-white dark:bg-gray-800"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{l.name}</span>
              <span className="text-sm text-gray-600 dark:text-gray-300">{l.level}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
