import React from "react";

const certifications = [
  { name: "React Developer Certificate", issuer: "Coursera", year: "2022" }
];

const Certifications = () => {
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">Certifications</h2>
      {certifications.map(cert => (
        <div key={cert.name} className="mb-4">
          <h3 className="text-xl font-semibold">{cert.name}</h3>
          <p className="text-gray-500">{cert.issuer} | {cert.year}</p>
        </div>
      ))}
    </section>
  );
};

export default Certifications;
