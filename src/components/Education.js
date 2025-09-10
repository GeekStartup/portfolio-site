import React from "react";

const education = [
  { degree: "B.Tech in Computer Science", institute: "XYZ University", duration: "2017-2021" }
];

const Education = () => {
  return (
    <section id="education" className="bg-gray-50 px-4 md:px-20 py-12">
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="space-y-4">
        {education.map((edu, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="font-semibold text-xl">{edu.degree}</h3>
            <p className="text-gray-500">{edu.institute}</p>
            <p className="mt-1">{edu.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
