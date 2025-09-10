import React from "react";

function Experience() {
  return (
    <section id="experience" className="py-16 px-4 md:px-20">
      <h2 className="text-3xl font-bold mb-4">Experience & Projects</h2>
      <div>
        <h3 className="text-xl font-semibold">Senior Developer at XYZ</h3>
        <p className="text-gray-600">Jan 2020 - Present</p>
        <ul className="list-disc ml-5 mt-2">
          <li>Worked on web and mobile applications for fintech clients.</li>
          <li>Integrated AI features for predictive analytics.</li>
          <li>Project: Built an internal dashboard to track KPIs for clients.</li>
        </ul>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Developer at ABC</h3>
        <p className="text-gray-600">Jun 2017 - Dec 2019</p>
        <ul className="list-disc ml-5 mt-2">
          <li>Developed responsive React applications.</li>
          <li>Collaborated with cross-functional teams on product features.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
