import React from "react";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-16"
    >
      {/* Left Column */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-5xl font-bold">Ashish K Nayak</h1>
        <p className="text-xl text-gray-600">
          Full Stack Developer | Passionate about creating modern web applications
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="mailto:ashish@example.com"
            className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
          >
            <FaEnvelope className="inline mr-2" /> Email
          </a>
          <a
            href="https://linkedin.com/in/ashishknayak"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-900 text-white rounded-full shadow-md hover:bg-gray-800 transition"
          >
            <FaLinkedin className="inline mr-2" /> LinkedIn
          </a>
        </div>
      </div>

      {/* Right Column */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl">
          <img
            src="/profile.jpg" // fallback: public folder
            alt="Ashish K Nayak"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
