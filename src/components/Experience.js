import React from "react";

const experiences = [
  { role: "Software Engineer", company: "Company A", duration: "2023-Present", desc: "Worked on full-stack applications." },
  { role: "Junior Developer", company: "Company B", duration: "2021-2023", desc: "Developed internal tools using React and Node.js." }
];

const Experience = () => {
  return (
    <section id="experience" className="px-4 md:px-20 py-12">
      <h2 className="text-3xl font-bold mb-6">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="font-semibold text-xl">{exp.role} - {exp.company}</h3>
            <p className="text-gray-500">{exp.duration}</p>
            <p className="mt-2">{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
