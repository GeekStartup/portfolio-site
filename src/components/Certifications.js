import React from "react";

const certifications = [
  "React Developer Certificate - XYZ",
  "Full Stack Bootcamp - ABC",
];

const Certifications = () => (
  <section id="certifications" className="py-12">
    <h2 className="text-2xl font-bold mb-4">Certifications</h2>
    <ul className="list-disc ml-6 space-y-2">
      {certifications.map((cert, idx) => (
        <li key={idx}>{cert}</li>
      ))}
    </ul>
  </section>
);

export default Certifications;
