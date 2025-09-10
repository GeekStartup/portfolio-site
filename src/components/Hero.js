import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaCopy, FaCheck } from "react-icons/fa";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const EMAIL = "ashish@example.com";           // <-- put your real email
  const LINKEDIN = "https://www.linkedin.com/in/ashish-k-nayak";
  const GITHUB = "https://github.com/GeekStartup";

  // Open Gmail compose in a new tab (bypasses the OS “choose app” dialog)
  const openGmailCompose = () => {
    const url =
      "https://mail.google.com/mail/?view=cm&fs=1&to=" +
      encodeURIComponent(EMAIL) +
      "&su=" +
      encodeURIComponent("Hello Ashish");
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Fallback if clipboard blocked
      alert(`Email: ${EMAIL}`);
    }
  };

  return (
    <section
      id="hero"
      className="max-w-6xl mx-auto px-6 lg:px-8 pt-24 md:pt-32 pb-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-10"
    >
      {/* Left: text */}
      <div className="md:w-1/2 space-y-4 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Ashish K Nayak
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Full Stack Developer · React · Node.js · Modern Web Enthusiast
        </p>

        {/* Action row */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
          <button
            onClick={openGmailCompose}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white shadow hover:bg-blue-700 transition"
          >
            <FaEnvelope />
            Email
          </button>

          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gray-900 text-white shadow hover:bg-black transition"
            aria-label="Copy email address"
            title="Copy email"
          >
            {copied ? <FaCheck /> : <FaCopy />}
            {copied ? "Copied" : "Copy"}
          </button>

          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gray-200 text-gray-900 shadow hover:bg-gray-300 transition"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-gray-200 text-gray-900 shadow hover:bg-gray-300 transition"
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>

      {/* Right: avatar */}
      <div className="md:w-1/2 flex md:justify-end justify-center">
        <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
          <img
            src="/profile.jpg"               // add your image to public/profile.jpg
            alt="Ashish K Nayak"
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src =
                "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=600&auto=format&fit=crop";
            }}
          />
        </div>
      </div>
    </section>
  );
}
