import React from "react";

const education = [
  { degree: "B.Tech Computer Science", institute: "ABC University", year: "2016-2020" },
  { degree: "High School", institute: "XYZ School", year: "2014-2016" },
];

const Education = () => (
  <section id="education" className="py-12">
    <h2 className="text-2xl font-bold mb-4">Education</h2>
    <ul className="space-y-2">
      {education.map((edu, idx) => (
        <li key={idx}>
          <p className="font-semibold">{edu.degree}</p>
          <p className="text-gray-600">{edu.institute} | {edu.year}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default Education;
