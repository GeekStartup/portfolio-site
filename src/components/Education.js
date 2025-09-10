import React from "react";

const education = [
  {
    degree: "B.Tech in Computer Science",
    institution: "XYZ University",
    duration: "2016 - 2020",
  },
  {
    degree: "High School",
    institution: "ABC School",
    duration: "2014 - 2016",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Education</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-600">{edu.institution}</p>
            <p className="text-gray-500 text-sm">{edu.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
