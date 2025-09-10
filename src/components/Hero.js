import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16">
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold">Ashish K Nayak</h1>
        <p className="text-lg md:text-xl text-gray-600">Full Stack Developer | Modern Web Enthusiast</p>
        <div className="flex space-x-4 mt-4">
          <a href="mailto:ashish@example.com" target="_blank" rel="noreferrer"><FaEnvelope size={24} /></a>
          <a href="https://www.linkedin.com/in/ashish-k-nayak" target="_blank" rel="noreferrer"><FaLinkedin size={24} /></a>
          <a href="https://github.com/GeekStartup" target="_blank" rel="noreferrer"><FaGithub size={24} /></a>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-56 h-56 rounded-full object-cover shadow-lg"
          onError={(e) => e.target.src = "/backup.jpg"}
        />
      </div>
    </section>
  );
};

export default Hero;
