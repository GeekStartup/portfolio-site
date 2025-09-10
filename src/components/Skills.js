import React from "react";

const skills = ["JavaScript", "React", "Node.js", "Express", "MongoDB", "TailwindCSS", "HTML", "CSS"];

function Skills() {
  return (
    <section id="skills" className="p-6 md:p-16">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        {skills.map((skill) => (
          <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
