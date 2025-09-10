import React from "react";

const skills = [
  "React",
  "Node.js",
  "TailwindCSS",
  "JavaScript",
  "Python",
  "Git",
  "Docker",
  "GraphQL"
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 px-4 md:px-0 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow-md transform transition hover:scale-105"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
