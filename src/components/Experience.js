import React from "react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "ABC Corp",
    date: "2023 - Present",
    description: "Built responsive UI with React and Tailwind CSS. Worked on multiple client projects."
  },
  {
    title: "Full Stack Developer",
    company: "XYZ Ltd",
    date: "2021 - 2023",
    description: "Developed REST APIs with Node.js and integrated frontend with React."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">Experience & Projects</h2>
      {experiences.map(exp => (
        <div key={exp.title} className="mb-6 p-4 border rounded shadow">
          <h3 className="text-xl font-semibold">{exp.title} - {exp.company}</h3>
          <p className="text-gray-500">{exp.date}</p>
          <p className="mt-2">{exp.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
