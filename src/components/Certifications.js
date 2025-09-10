import React from "react";

const certifications = [
  { title: "React Developer Certificate", issuer: "Coursera", year: "2022" },
  { title: "Full Stack Web Development", issuer: "Udemy", year: "2021" },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="max-w-6xl mx-auto px-6 lg:px-8 py-14 border-t"
    >
      <h2 className="text-3xl font-bold mb-8">Certifications</h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {certifications.map((c) => (
          <article
            key={c.title}
            className="p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="text-gray-600">{c.issuer} • {c.year}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
