import React from "react";

const educationList = [
  { degree: "B.Tech in Computer Science", institute: "ABC University", year: "2020" },
  { degree: "High School", institute: "XYZ School", year: "2016" }
];

function Education() {
  return (
    <section id="education" className="p-6 md:p-16 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="space-y-4">
        {educationList.map((edu, i) => (
          <div key={i} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{edu.degree}</h3>
            <p className="text-gray-500">{edu.institute} - {edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
