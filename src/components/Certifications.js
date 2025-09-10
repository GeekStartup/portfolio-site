import React from "react";

const certifications = [
  { name: "AWS Certified Solutions Architect", issuer: "Amazon", year: "2023" },
  { name: "React Developer", issuer: "Coursera", year: "2022" }
];

const Certifications = () => {
  return (
    <section id="certifications" className="px-4 md:px-20 py-12">
      <h2 className="text-3xl font-bold mb-6">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
            <h3 className="font-semibold">{cert.name}</h3>
            <p className="text-gray-500">{cert.issuer} - {cert.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
