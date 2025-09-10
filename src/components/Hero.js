import React from "react";
import profilePic from "../public/profile.jpg";

const Hero = () => {
  const fallbackPic = "https://via.placeholder.com/150";

  return (
    <section id="hero" className="py-12 text-center">
      <img
        src={profilePic || fallbackPic}
        alt="Profile"
        className="w-40 h-40 mx-auto rounded-full mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">Ashish K Nayak</h1>
      <p className="text-xl mb-4">Full Stack Developer | React & Node.js</p>
      <div className="space-x-4">
        <a
          href="https://www.linkedin.com/in/ashish-k-nayak/"
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          LinkedIn
        </a>
        <a
          href="mailto:ashish@example.com"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Email
        </a>
        <span className="px-4 py-2 bg-gray-200 text-black rounded">+91 12345 67890</span>
      </div>
    </section>
  );
};

export default Hero;
