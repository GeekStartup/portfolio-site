import React from "react";
import SectionWrapper from "./SectionWrapper";

const certifications = [
  { title: "React Developer Certificate", issuer: "Coursera", year: "2022" },
  { title: "Full Stack Web Development", issuer: "Udemy", year: "2021" },
];

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" title="Certifications">
      <div className="grid gap-6 sm:grid-cols-2">
        {certifications.map((c) => (
          <article
            key={c.title}
            className="p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="text-gray-600">{c.issuer} • {c.year}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
