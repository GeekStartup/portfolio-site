import React from "react";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon",
    year: "2023",
  },
  {
    title: "React Developer Certificate",
    issuer: "Coursera",
    year: "2022",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {certifications.map((cert, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold">{cert.title}</h3>
            <p className="text-gray-600">{cert.issuer}</p>
            <p className="text-gray-500 text-sm">{cert.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
