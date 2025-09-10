import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg";

const Hero = () => {
  const fallbackProfile = "https://via.placeholder.com/150";

  return (
    <section id="hero" className="flex flex-col md:flex-row items-center justify-center py-16 px-4 md:px-16">
      <motion.img
        src={profilePic || fallbackProfile}
        alt="Profile"
        className="w-48 h-48 rounded-full mb-6 md:mb-0 md:mr-12 object-cover shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl font-bold mb-4">Ashish K Nayak</h1>
        <p className="text-lg text-gray-600">
          Full Stack Developer | React, Node.js, Tailwind CSS
        </p>
        <div className="mt-6 flex justify-center md:justify-start space-x-4">
          <a href="mailto:ashish@example.com" className="text-blue-500 hover:underline">Email</a>
          <a href="https://www.linkedin.com/in/ashish-k-nayak/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
          <span className="text-gray-700">+91 98765 43210</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
