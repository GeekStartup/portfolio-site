import React from "react";
import { motion } from "framer-motion";

/**
 * Props:
 * - id: string (anchor id)
 * - title?: string
 * - replay?: boolean  // NEW — if true, the fade/slide will replay on each re-entry
 */
export default function SectionWrapper({ id, title, children, replay = false }) {
  return (
    <motion.section
      id={id}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 border-t border-gray-200 dark:border-gray-800 text-gray-900 dark:text-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: !replay, amount: 0.2 }}   {/* <- key change */}
      transition={{ duration: 0.6 }}
    >
      {title && (
        <h2 className="text-3xl font-bold mb-8 border-b-2 border-brand inline-block pb-1">
          {title}
        </h2>
      )}
      {children}
    </motion.section>
  );
}
