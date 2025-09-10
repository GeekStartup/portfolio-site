import React from "react";

const skills = ["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "JavaScript"];

const Skills = () => (
  <aside className="sticky top-20 mb-8">
    <h2 className="text-xl font-bold mb-4">Skills</h2>
    <ul className="space-y-2">
      {skills.map((skill) => (
        <li key={skill} className="px-3 py-1 bg-gray-100 rounded shadow-sm">
          {skill}
        </li>
      ))}
    </ul>
  </aside>
);

export default Skills;
