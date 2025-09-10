// src/components/Education.js
import React from "react";

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "ABC University",
    period: "2015 - 2019",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {education.map((edu, idx) => (
          <div key={idx} className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <span className="text-gray-500">{edu.institution}</span>
            <p className="text-gray-500">{edu.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
