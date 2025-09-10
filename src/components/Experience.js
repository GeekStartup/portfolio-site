import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="pt-20 py-16 bg-white text-center md:text-left px-6 md:px-20">
      <motion.h2
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Experience
      </motion.h2>

      <motion.div
        className="space-y-6 max-w-3xl mx-auto md:mx-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div>
          <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
          <p className="text-gray-700">Maveric Systems | 2021 - Present</p>
          <p className="text-gray-600">
            Building scalable web applications with React and Node.js. Mentoring junior developers and contributing to full-stack architecture.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Software Engineer</h3>
          <p className="text-gray-700">Previous Company | 2018 - 2021</p>
          <p className="text-gray-600">
            Developed frontend components and integrated backend APIs for multiple projects. Focused on building maintainable and reusable code.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
