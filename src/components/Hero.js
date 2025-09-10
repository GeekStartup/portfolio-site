import React from "react";

const profilePic = process.env.PUBLIC_URL + "/profile.jpg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-24 min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-12 bg-gradient-to-r from-blue-50 to-white"
    >
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-textDark">Ashish K Nayak</h1>
        <p className="text-lg md:text-xl text-textGray">
          Senior Software Engineer | Building Scalable Solutions
        </p>
        <div className="flex gap-3 justify-center md:justify-start flex-wrap">
          <a
            href="mailto:your.email@example.com"
            className="px-5 py-2 bg-primary text-white rounded-full shadow hover:bg-blue-700 transition transform hover:scale-105"
          >
            Email
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 border border-gray-300 rounded-full shadow hover:bg-gray-100 transition transform hover:scale-105"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2 border border-gray-300 rounded-full shadow hover:bg-gray-100 transition transform hover:scale-105"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src={profilePic}
          onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/400")}
          alt="Profile"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-gray-200 shadow-xl transform hover:scale-105 transition"
        />
      </div>
    </section>
  );
}
