import React from "react";

const skills = ["React", "JavaScript", "Node.js", "TailwindCSS", "Spring Boot", "Git"];

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
