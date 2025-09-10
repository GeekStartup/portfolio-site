import React from "react";

const Hero = () => {
  const profile = "/profile.jpg"; // put your backup in public folder

  return (
    <section id="hero" className="text-center py-16 px-4 md:px-0">
      <img
        src={profile}
        alt="Profile"
        className="mx-auto w-40 h-40 rounded-full object-cover border-4 border-primary"
        onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
      />
      <h1 className="text-4xl font-bold mt-4">Ashish K Nayak</h1>
      <p className="mt-2 text-lg text-gray-600">
        Software Developer | Web & Mobile Applications | Open to Opportunities
      </p>
    </section>
  );
};

export default Hero;
