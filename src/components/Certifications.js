// src/components/Certifications.js
import React from "react";

const certifications = [
  { name: "AWS Certified Developer", year: "2022" },
  { name: "React Professional Certificate", year: "2021" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {certifications.map((cert, idx) => (
          <div key={idx} className="p-6 bg-gray-50 rounded-lg shadow-md flex justify-between">
            <span>{cert.name}</span>
            <span className="text-gray-500">{cert.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
