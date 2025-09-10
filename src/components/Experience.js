import React from "react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "TechCorp",
    period: "Jan 2022 - Present",
    description: "Built modern web applications using React and Node.js."
  },
  {
    role: "Frontend Developer",
    company: "WebSolutions",
    period: "Jun 2020 - Dec 2021",
    description: "Developed responsive interfaces and reusable components."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4 md:px-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Experience & Projects</h2>
      {experiences.map((exp, idx) => (
        <div key={idx} className="mb-6">
          <h3 className="text-xl font-semibold">{exp.role} - {exp.company}</h3>
          <span className="text-gray-500">{exp.period}</span>
          <p className="text-gray-700 mt-2">{exp.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
