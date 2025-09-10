import React from "react";

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "XYZ University",
    year: "2013 - 2017",
  },
  {
    degree: "Higher Secondary Education",
    institution: "ABC School",
    year: "2011 - 2013",
  },
];

const Education = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div className="space-y-4">
        {education.map((edu, idx) => (
          <div key={idx} className="border p-4 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-600">{edu.institution} | {edu.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
