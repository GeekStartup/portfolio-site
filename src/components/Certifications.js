import React from "react";

const certifications = [
  { title: "React Development", issuer: "Coursera", year: 2021 },
  { title: "Full Stack Web Development", issuer: "Udemy", year: 2020 }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 px-4 md:px-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Certifications</h2>
      {certifications.map((cert, idx) => (
        <div key={idx} className="mb-4">
          <h3 className="text-lg font-semibold">{cert.title}</h3>
          <span className="text-gray-500">{cert.issuer} | {cert.year}</span>
        </div>
      ))}
    </section>
  );
};

export default Certifications;
