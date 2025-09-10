import React from "react";

const experiences = [
  {
    title: "Software Developer",
    company: "Tech Company",
    period: "2021 - Present",
    projects: ["Project A", "Project B"],
  },
  {
    title: "Intern",
    company: "Startup Inc.",
    period: "2020 - 2021",
    projects: ["Project X"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="my-12">
      <h2 className="text-2xl font-bold mb-6">Experience & Projects</h2>
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.title} className="p-4 bg-white shadow rounded-lg">
            <h3 className="font-semibold">{exp.title} - {exp.company}</h3>
            <p className="text-sm text-gray-500">{exp.period}</p>
            {exp.projects && (
              <ul className="list-disc list-inside mt-2">
                {exp.projects.map((proj) => (
                  <li key={proj}>{proj}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
