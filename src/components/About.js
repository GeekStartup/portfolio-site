// src/components/About.js
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 text-gray-800 px-6">
      <motion.h2
        className="text-3xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-700 bg-white p-8 rounded-2xl shadow-md"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-4">
          I am a results-driven software engineer with over a decade of
          experience in designing and delivering enterprise-grade applications.
          My expertise spans full-stack development, cloud-native solutions, and
          modern DevOps practices.
        </p>
        <p className="mb-4">
          Throughout my career, I have worked extensively with banking and
          financial services clients, building secure and scalable digital
          platforms. I specialize in aligning technology with business goals to
          improve customer experiences and drive operational excellence.
        </p>
        <p>
          Passionate about continuous learning, I stay updated with the latest
          advancements in AI, cloud computing, and microservices architecture.
          I thrive in collaborative environments, mentoring teams, and fostering
          innovation through agile practices.
        </p>
      </motion.div>
    </section>
  );
}
