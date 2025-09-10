import React from "react";

export default function MainContent() {
  return (
    <div>
      {/* Summary */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Summary</h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          Technology leader with extensive experience in driving digital
          transformation, product engineering, and delivery across BFSI,
          fintech, and enterprise domains. Adept at leading teams, building
          scalable systems, and enabling innovation with cloud, DevOps, and
          AI-driven solutions.
        </p>
      </section>

      {/* Experience */}
      <section className="mt-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Experience</h2>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-700">
            Director of Technology – Maveric Systems
          </h3>
          <p className="text-sm text-gray-600">2019 – Present</p>
          <p className="text-sm text-gray-700 mt-1">
            Leading product engineering initiatives and strategic technology
            programs for global banking clients. Spearheading innovation in
            cloud, DevOps, and AI adoption.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-700">
            Vice President – JP Morgan Chase
          </h3>
          <p className="text-sm text-gray-600">2014 – 2019</p>
          <p className="text-sm text-gray-700 mt-1">
            Delivered large-scale banking products with cross-functional teams,
            implementing agile practices and modern technology stacks.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="mt-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Projects</h2>
        <ul className="list-disc list-inside text-sm text-gray-700">
          <li>Implemented generative AI solutions for banking operations</li>
          <li>Architected digital platforms for retail and corporate banking</li>
          <li>Built CI/CD pipelines to accelerate delivery</li>
        </ul>
      </section>
    </div>
  );
}
