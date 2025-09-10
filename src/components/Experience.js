import React from "react";
import SectionWrapper from "./SectionWrapper";

const experiences = [
  {
    title: "Frontend Developer",
    company: "ABC Corp",
    date: "2023 – Present",
    description:
      "Built responsive UI with React and Tailwind CSS. Worked on multiple client-facing projects with agile teams.",
  },
  {
    title: "Full Stack Developer",
    company: "XYZ Ltd",
    date: "2021 – 2023",
    description:
      "Developed REST APIs with Node.js and integrated frontend using React. Collaborated on database design and optimization.",
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience" title="Experience & Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((exp) => (
          <article
            key={exp.title}
            className="p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-600">{exp.company} | {exp.date}</p>
            <p className="mt-3 text-gray-700">{exp.description}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
