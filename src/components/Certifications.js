import React from "react";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon",
    year: "2023",
  },
  {
    title: "Oracle Java SE 11 Developer",
    issuer: "Oracle",
    year: "2022",
  },
];

const Certifications = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8">Certifications</h2>
      <div className="space-y-4">
        {certifications.map((cert, idx) => (
          <div key={idx} className="border p-4 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{cert.title}</h3>
            <p className="text-gray-600">{cert.issuer} | {cert.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
