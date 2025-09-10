import React from "react";

const educationList = [
  { degree: "B.Tech in Computer Science", institute: "XYZ University", year: "2016-2020" },
  { degree: "High School", institute: "ABC School", year: "2014-2016" },
];

export default function Education() {
  return (
    <section id="education" className="my-12">
      <h2 className="text-2xl font-bold mb-6">Education</h2>
      <div className="space-y-4">
        {educationList.map((edu) => (
          <div key={edu.degree} className="p-4 bg-white shadow rounded-lg">
            <h3 className="font-semibold">{edu.degree}</h3>
            <p className="text-gray-600">{edu.institute} | {edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
