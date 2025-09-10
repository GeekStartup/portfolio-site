import React from "react";

const skills = ["JavaScript", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "HTML", "CSS"];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 md:px-16 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span key={skill} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
