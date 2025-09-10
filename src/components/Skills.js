import React from "react";

const skills = [
  "React", "Node.js", "Express", "MongoDB", "PostgreSQL",
  "TailwindCSS", "HTML", "CSS", "JavaScript", "TypeScript"
];

export default function Skills() {
  return (
    <section id="skills" className="my-12">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
