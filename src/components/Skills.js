import React from "react";

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "TypeScript",
  "HTML/CSS",
  "Tailwind CSS",
  "AWS",
  "Git"
];

const Skills = () => {
  return (
    <aside className="lg:w-1/4 bg-gray-50 p-6 rounded-lg mb-8 lg:mb-0">
      <h3 className="text-2xl font-semibold mb-4">Skills</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full inline-block">
            {skill}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Skills;
