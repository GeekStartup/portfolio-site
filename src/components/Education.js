import React from "react";

const education = [
  { degree: "B.Tech in Computer Science", institution: "XYZ University", period: "2016 - 2020" }
];

const Education = () => {
  return (
    <section id="education" className="py-16 px-4 md:px-16 max-w-4xl mx-auto bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      {education.map((edu, idx) => (
        <div key={idx} className="mb-4">
          <h3 className="text-xl font-semibold">{edu.degree}</h3>
          <span className="text-gray-500">{edu.institution} | {edu.period}</span>
        </div>
      ))}
    </section>
  );
};

export default Education;
