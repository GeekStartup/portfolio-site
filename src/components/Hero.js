// src/components/Hero.js
import React from "react";

const profilePic = "https://via.placeholder.com/150"; // fallback profile picture

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center text-center py-20 bg-gray-50">
      <img
        src={profilePic}
        alt="Profile"
        className="w-40 h-40 rounded-full shadow-lg mb-6 object-cover"
      />
      <h1 className="text-4xl font-bold mb-2">Ashish K Nayak</h1>
      <p className="text-xl text-gray-600 mb-4">Fullstack Developer | Open to Opportunities</p>
      <p className="max-w-xl text-gray-700">
        Passionate about building modern web applications with React, Node.js, and TailwindCSS.
        Experienced in designing responsive and modular UI/UX.
      </p>
    </section>
  );
}
