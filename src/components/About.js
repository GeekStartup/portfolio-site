import React from "react";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about" title="About Me">
      <p className="text-gray-700 text-lg leading-relaxed">
        I am Ashish K Nayak, a <span className="font-semibold">Full Stack Developer</span> passionate
        about crafting modern web applications. With hands-on experience in{" "}
        <span className="font-medium">React, Node.js, and scalable UI/UX</span>, I enjoy creating
        responsive, performance-focused solutions that deliver real impact. I care about clean code,
        accessible design, and pragmatic engineering that moves products forward.
      </p>
    </SectionWrapper>
  );
}
