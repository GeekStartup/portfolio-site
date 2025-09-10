import React from "react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Maveric Systems",
    duration: "2023 - Present",
    projects: ["Project A: Dashboard", "Project B: API Integration"]
  },
  {
    role: "Frontend Developer",
    company: "XYZ Company",
    duration: "2021 - 2023",
    projects: ["Website Redesign", "Internal Portal"]
  }
];

function Experience() {
  return (
    <section id="experience" className="p-6 md:p-16">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{exp.role} - {exp.company}</h3>
            <p className="text-gray-500 mb-2">{exp.duration}</p>
            <ul className="list-disc list-inside">
              {exp.projects.map((proj, j) => (
                <li key={j}>{proj}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
