import React from "react";

const experience = [
  {
    role: "Senior Software Engineer",
    company: "Maveric Systems",
    duration: "2022 - Present",
    description: "Developed modern web applications using React, Node.js, and TailwindCSS. Led a small team of developers.",
  },
  {
    role: "Software Engineer",
    company: "TechCorp",
    duration: "2020 - 2022",
    description: "Built scalable backend APIs and integrated with frontend applications.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
      <div className="max-w-6xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        {experience.map((exp, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-gray-500 text-sm mb-2">{exp.duration}</p>
            <p className="text-gray-700">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
