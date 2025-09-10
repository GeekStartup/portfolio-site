import React from "react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "TechCorp",
    duration: "2022 - Present",
    projects: ["Portfolio Website", "E-commerce App"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4 md:px-0">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      {experiences.map((exp) => (
        <div key={exp.title} className="mb-6">
          <h3 className="text-xl font-semibold">{exp.title}</h3>
          <p className="text-gray-600">{exp.company} | {exp.duration}</p>
          <ul className="list-disc ml-6 mt-2">
            {exp.projects.map((project) => (
              <li key={project}>{project}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
