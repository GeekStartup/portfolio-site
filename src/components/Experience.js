import React from "react";

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Maveric Systems",
    duration: "2020 - Present",
    description: "Working on web applications, modern UI, and APIs."
  },
  {
    title: "Software Engineer",
    company: "XYZ Company",
    duration: "2017 - 2020",
    description: "Developed microservices and front-end components."
  }
];

const projects = [
  {
    name: "Portfolio Website",
    tech: "React, TailwindCSS",
    link: "#"
  },
  {
    name: "E-commerce App",
    tech: "React, Node.js, MongoDB",
    link: "#"
  }
];

const Experience = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8">Experience & Projects</h2>

      <div className="mb-12">
        {experiences.map((exp, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-600">{exp.company} | {exp.duration}</p>
            <p className="mt-1">{exp.description}</p>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <div key={idx} className="border p-4 rounded-lg hover:shadow-lg transition">
              <h4 className="font-semibold">{proj.name}</h4>
              <p className="text-gray-600">{proj.tech}</p>
              {proj.link && (
                <a href={proj.link} className="text-blue-500 hover:underline mt-2 inline-block">
                  View
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
