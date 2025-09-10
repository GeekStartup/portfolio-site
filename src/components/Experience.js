import React from "react";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "ABC Corp",
    duration: "Jan 2022 - Present",
    projects: ["Project A", "Project B"],
  },
  {
    role: "Frontend Developer",
    company: "XYZ Inc",
    duration: "Jun 2020 - Dec 2021",
    projects: ["Project C"],
  },
];

const Experience = () => (
  <section id="experience" className="py-12">
    <h2 className="text-2xl font-bold mb-6">Experience & Projects</h2>
    {experiences.map((exp, idx) => (
      <div key={idx} className="mb-6">
        <h3 className="font-semibold">{exp.role} @ {exp.company}</h3>
        <p className="text-gray-600">{exp.duration}</p>
        <ul className="list-disc ml-6 mt-2">
          {exp.projects.map((proj, i) => (
            <li key={i}>{proj}</li>
          ))}
        </ul>
      </div>
    ))}
  </section>
);

export default Experience;
