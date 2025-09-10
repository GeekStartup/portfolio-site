import React from "react";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const interests = [
  "Sci-fi books",
  "Indo-Chinese cooking",
  "Exploring new tech",
];

export default function Interests() {
  return (
    <SectionWrapper id="interests" title="Interests">
      <div className="flex flex-wrap gap-3">
        {interests.map((x, i) => (
          <motion.span
            key={x}
            className="px-3 py-2 rounded-full bg-blue-50 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200 text-sm"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
          >
            {x}
          </motion.span>
        ))}
      </div>
    </SectionWrapper>
  );
}
