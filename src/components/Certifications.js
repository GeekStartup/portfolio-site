import React from "react";

const certifications = [
  "AWS Certified Developer",
  "React JS Professional",
  "Fullstack Web Development"
];

function Certifications() {
  return (
    <section id="certifications" className="p-6 md:p-16">
      <h2 className="text-3xl font-bold mb-6">Certifications</h2>
      <ul className="list-disc list-inside space-y-2">
        {certifications.map((cert, i) => (
          <li key={i} className="bg-white p-4 rounded shadow hover:shadow-md transition">{cert}</li>
        ))}
      </ul>
    </section>
  );
}

export default Certifications;
