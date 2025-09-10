import React from "react";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about" title="About Me">
      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        Senior Software Engineer with <span className="font-semibold">11+ years</span> building
        scalable services and platforms in the banking/fintech domain. I specialize in
        <span className="font-medium"> Java, Spring Boot, REST APIs, and microservices</span> with a strong
        focus on reliability, performance, and clean architecture. I’ve led delivery across
        globally distributed teams, mentored engineers, and collaborated closely with product and
        stakeholders to ship impact.
      </p>

      <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
        Recent work includes leading backend development for <span className="font-medium">HDFC PayZapp 2.0</span>
        (with Zeta) and building enterprise APIs for <span className="font-medium">The Family Office</span>,
        with robust CI/CD, quality gates, and observability. I enjoy turning complex requirements into
        pragmatic, secure, and maintainable systems.
      </p>
    </SectionWrapper>
  );
}
