import React from "react";

export default function About() {
  return (
    <section id="about" className="pt-20 py-16 md:py-20 px-6 bg-gray-50">
      <div data-aos="fade-up" className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-semibold mb-6 text-center">About Me</h2>
        <p className="text-gray-700 text-lg">
          I am a passionate software engineer with experience in developing
          scalable and maintainable applications. I enjoy problem solving and
          learning new technologies to deliver impactful solutions.
        </p>
      </div>
    </section>
  );
}
