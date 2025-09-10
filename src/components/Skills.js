import React from "react";

const skills = [
  "JavaScript", "React", "Node.js", "Tailwind CSS", "Python", "Java", "SQL", "Git"
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-50 px-4 md:px-20 py-12">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div key={skill} className="bg-white shadow-md rounded-lg p-4 text-center hover:scale-105 transform transition">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
