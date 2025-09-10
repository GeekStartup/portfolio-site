import React from "react";
import SectionWrapper from "./SectionWrapper";

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "XYZ University",
    period: "2017 – 2021",
    details:
      "Focused on software engineering, web technologies, and data structures. Led a capstone project building a full-stack app."
  },
];

export default function Education() {
  return (
    <SectionWrapper id="education" title="Education">
      <div className="grid gap-6 sm:grid-cols-2">
        {education.map((ed) => (
          <article
            key={ed.degree}
            className="p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{ed.degree}</h3>
            <p className="text-gray-600">{ed.institution} • {ed.period}</p>
            {ed.details && <p className="mt-3 text-gray-700">{ed.details}</p>}
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
