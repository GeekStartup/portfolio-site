import React from "react";

const experiences = [
  {
    role: "Frontend Developer",
    company: "TechCorp",
    duration: "Jan 2022 - Present",
    details: "Developed scalable React applications with responsive UI and REST APIs."
  },
  {
    role: "Software Engineer",
    company: "InnovateX",
    duration: "Jun 2020 - Dec 2021",
    details: "Worked on full-stack projects using Node.js, Express, and MongoDB."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="max-w-4xl mx-auto my-12 px-4">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-4 border-blue-600 pl-4 py-2 bg-gray-50 rounded shadow-sm">
            <h3 className="font-semibold text-xl">{exp.role}</h3>
            <p className="text-gray-600">{exp.company} | {exp.duration}</p>
            <p className="text-gray-700 mt-1">{exp.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
