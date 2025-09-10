import React from "react";

const skills = ["JavaScript", "React", "Node.js", "Python", "HTML", "CSS", "Tailwind", "Git"];

const Skills = () => {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map(skill => (
          <span key={skill} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
