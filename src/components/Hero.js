import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col md:flex-row items-center justify-between py-20 px-6 md:px-20">
      {/* Left side */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I'm Ashish Nayak
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Passionate software developer | Frontend & Backend | Building modern web apps
        </p>
        <div className="flex space-x-4">
          <a
            href="mailto:your.email@example.com"
            className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/ashish-knayak"
            target="_blank"
            rel="noreferrer"
            className="text-blue-700 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/GeekStartup"
            target="_blank"
            rel="noreferrer"
            className="text-gray-800 text-2xl"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Right side */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl">
          <img
            src="/profile.jpg" // keep only here
            alt="Ashish K Nayak"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
