import React from "react";
import localProfile from "../assets/profile.jpg"; // may be missing in some setups

const fallbackProfile =
  "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=400&auto=format&fit=crop";

const Hero = () => {
  const profilePic = localProfile || fallbackProfile; // fallback if import fails

  return (
    <section className="text-center my-10">
      <img
        src={profilePic}
        alt="Profile"
        className="w-40 h-40 rounded-full mx-auto mb-6"
        onError={(e) => {
          e.currentTarget.src = fallbackProfile; // ensures broken local images are replaced
        }}
      />
      <h1 className="text-3xl font-bold">Ashish Nayak</h1>
      <p className="text-gray-500 mt-2">Full Stack Developer</p>
    </section>
  );
};

export default Hero;
