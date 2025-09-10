import React from "react";
import SectionWrapper from "./SectionWrapper";

const experiences = [
  {
    title: "Frontend Developer",
    company: "ABC Corp",
    date: "2023 – Present",
    description:
      "Built responsive UI with React and Tailwind CSS. Collaborated closely with designers and backend teams to ship features fast.",
    projects: [
      "Internal Analytics Dashboard (React + Tailwind)",
      "Marketing Site Revamp (+30% conversion uplift)",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "XYZ Ltd",
    date: "2021 – 2023",
    description:
      "Developed REST APIs with Node.js/Express and integrated React frontends. Worked on DB design and performance tuning.",
    projects: [
      "Order Management System (Node.js + PostgreSQL)",
      "Customer Portal (React + JWT Auth)",
    ],
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience" title="Experience & Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((exp) => (
          <article
            key={`${exp.title}-${exp.company}`}
            className="p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-600">{exp.company} • {exp.date}</p>
            <p className="mt-3 text-gray-700">{exp.description}</p>

            {exp.projects && (
              <div className="mt-3">
                <h4 className="font-semibold text-gray-900">Projects</h4>
                <ul className="list-disc ml-5 mt-1 text-gray-600">
                  {exp.projects.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
