import React from "react";
import profilePic from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section id="hero" className="text-center py-20">
      <img
        src={profilePic}
        alt="Profile"
        className="w-40 h-40 rounded-full mx-auto mb-6"
      />
      <h1 className="text-4xl font-bold mb-2">Ashish Nayak</h1>
      <p className="text-xl mb-4">Full Stack Developer | Open Source Enthusiast</p>
      <div className="flex justify-center space-x-4">
        <a
          href="https://github.com/GeekStartup"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ashish-nayak"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
        >
          LinkedIn
        </a>
        <a
          href="mailto:ashish@example.com"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Email
        </a>
      </div>
    </section>
  );
};

export default Hero;
