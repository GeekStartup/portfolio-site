import React from "react";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "TailwindCSS", level: 75 },
  { name: "AWS", level: 70 },
];

const Skills = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md space-y-4">
      <h2 className="text-xl font-bold mb-4">Skills</h2>
      {skills.map((skill, idx) => (
        <div key={idx}>
          <p className="text-gray-700 font-medium">{skill.name}</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
