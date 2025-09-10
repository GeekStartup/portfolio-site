// src/components/Hero.js
import { motion } from "framer-motion";

// Use a local image if present, otherwise fallback to external URL
const profilePic = "/assets/profile.jpg"; // put in public/assets/profile.jpg
const fallbackPic = "https://via.placeholder.com/192?text=Profile";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-blue-50 to-white px-6"
    >
      <motion.div
        className="md:w-1/2 flex justify-center mb-8 md:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={profilePic}
          onError={(e) => {
            e.currentTarget.src = fallbackPic; // fallback if local image missing
          }}
          alt="Ashish Nayak"
          className="w-48 h-48 rounded-full border-4 border-blue-500 object-cover shadow-lg"
        />
      </motion.div>

      <motion.div
        className="md:w-1/2 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Ashish Nayak
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Experienced software engineer specializing in Java, Spring Boot, and Cloud-native applications. Passionate about designing scalable microservices, leading teams, and building modern web solutions.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition transform hover:scale-105"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-full shadow hover:bg-gray-300 transition transform hover:scale-105"
          >
            View Projects
          </a>
        </div>
      </motion.div>
    </section>
  );
}
