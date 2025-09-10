import React from "react";

const skills = [
  "JavaScript", "TypeScript", "React", "Redux", "Node.js",
  "Express", "REST APIs", "MongoDB", "PostgreSQL",
  "Tailwind CSS", "HTML", "CSS", "Git", "Docker"
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 lg:px-8 py-14 border-t"
    >
      <h2 className="text-3xl font-bold mb-8">Skills</h2>

      {/* Card container */}
      <div className="p-6 rounded-lg shadow-md bg-white">
        {/* Tags grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {skills.map((s) => (
            <span
              key={s}
              className="inline-block px-3 py-2 rounded-full bg-blue-50 text-blue-800 text-sm font-medium
                         hover:bg-blue-100 transition shadow-sm"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
