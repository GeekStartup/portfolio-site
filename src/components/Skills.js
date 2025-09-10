// src/components/Skills.js
import React from "react";

export default function Skills() {
  const skills = [
    "React", "Node.js", "Express", "TailwindCSS",
    "JavaScript", "TypeScript", "MongoDB", "SQL",
    "Git", "Docker"
  ];

  return (
    <aside id="skills" className="bg-gray-50 p-6 rounded-lg shadow-md w-full md:w-1/4 mb-6 md:mb-0">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li key={skill} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            {skill}
          </li>
        ))}
      </ul>
    </aside>
  );
}
