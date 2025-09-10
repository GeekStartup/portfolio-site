import React from "react";

const education = [
  { degree: "B.Tech in Computer Science", institution: "XYZ University", year: "2017 - 2021" }
];

const Education = () => {
  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      {education.map(ed => (
        <div key={ed.degree} className="mb-4">
          <h3 className="text-xl font-semibold">{ed.degree}</h3>
          <p className="text-gray-500">{ed.institution} | {ed.year}</p>
        </div>
      ))}
    </section>
  );
};

export default Education;
