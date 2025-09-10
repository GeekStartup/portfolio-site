import React from "react";

const certifications = [
  { title: "Full Stack Web Development", issuer: "Coursera" },
  { title: "React Advanced", issuer: "Udemy" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="my-12">
      <h2 className="text-2xl font-bold mb-6">Certifications</h2>
      <div className="space-y-4">
        {certifications.map((cert) => (
          <div key={cert.title} className="p-4 bg-white shadow rounded-lg">
            <h3 className="font-semibold">{cert.title}</h3>
            <p className="text-gray-600">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
