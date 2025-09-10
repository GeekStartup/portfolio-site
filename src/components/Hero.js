// Hero.js
import React from "react";

const localProfileExists = false; // set to true if you add a local image
const profilePic = localProfileExists
  ? "/assets/profile.jpg" // path relative to public folder
  : "https://via.placeholder.com/300";

const Hero = () => {
  return (
    <section className="hero flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <img
          src={profilePic}
          alt="Ashish Nayak"
          className="w-48 h-48 rounded-full mx-auto object-cover mb-6"
        />
        <h1 className="text-4xl font-bold mb-2">Ashish Nayak</h1>
        <p className="text-xl text-gray-700">Full Stack Developer | AI Enthusiast</p>
      </div>
    </section>
  );
};

export default Hero;
