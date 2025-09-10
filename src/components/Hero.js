import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { FaEnvelope, FaLinkedin, FaGithub, FaCopy, FaCheck, FaPhone } from "react-icons/fa";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const EMAIL = "ashish@example.com"; // set your real email
  const PHONE = "+91-98765-43210";    // set your real phone
  const LINKEDIN = "https://www.linkedin.com/in/ashish-k-nayak";
  const GITHUB = "https://github.com/GeekStartup";
  const FALLBACK_IMG =
    "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=600&auto=format&fit=crop";

  const openGmailCompose = () => {
    const url =
      "https://mail.google.com/mail/?view=cm&fs=1&to=" +
      encodeURIComponent(EMAIL) +
      "&su=" +
      encodeURIComponent("Hello Ashish");
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const copyEmail = () => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard
        .writeText(EMAIL)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        })
        .catch(() => alert(`Email: ${EMAIL}`));
    } else {
      alert(`Email: ${EMAIL}`);
    }
  };

  return (
    <SectionWrapper id="hero">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
        <div className="md:w-1/2 space-y-3 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Ashish K Nayak
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
            Senior Software Engineer · Java · Spring Boot · Microservices · CI/CD
          </p>

          {/* One-line contacts (wraps on very small screens) */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm md:text-base">
            <span className="inline-flex items-center gap-2 text-gray-800 dark:text-gray-200 whitespace-nowrap">
              <FaPhone /> <span className="font-medium">{PHONE}</span>
            </span>

            <button
              onClick={openGmailCompose}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand text-white shadow hover:opacity-90 transition"
              title="Email via Gmail"
            >
              <FaEnvelope /> Email
            </button>

            <button
              onClick={copyEmail}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-900 text-white shadow hover:bg-black transition"
              aria-label="Copy email address"
              title="Copy email"
            >
              {copied ? <FaCheck /> : <FaCopy />}
            </button>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600 text-white shadow hover:opacity-90 transition"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800 text-white shadow hover:opacity-90 transition"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex md:justify-end justify-center">
          <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-60 md:h-60 rounded-full overflow-hidden ring-4 ring-white dark:ring-gray-900 shadow-xl">
            <img
              src="/profile.jpg"
              alt="Ashish K Nayak"
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = FALLBACK_IMG;
              }}
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
