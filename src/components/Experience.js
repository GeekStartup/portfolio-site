// src/components/Experience.js
import React from "react";

const experiences = [
  {
    company: "Maveric Systems",
    role: "Senior Software Engineer",
    period: "2022 - Present",
    projects: [
      "Developed a modular React component library",
      "Integrated payment gateway solutions",
    ],
  },
  {
    company: "XYZ Solutions",
    role: "Software Engineer",
    period: "2019 - 2022",
    projects: [
      "Built RESTful APIs using Node.js & Express",
      "Implemented CI/CD pipelines with Docker & GitHub Actions",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Experience & Projects</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="p-6 border-l-4 border-blue-600 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{exp.role} @ {exp.company}</h3>
            <span className="text-gray-500">{exp.period}</span>
            <ul className="mt-3 list-disc list-inside">
              {exp.projects.map((proj, i) => <li key={i}>{proj}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
