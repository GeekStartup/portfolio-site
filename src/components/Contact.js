import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { FaEnvelope, FaLinkedin, FaGithub, FaCopy, FaPhone, FaCheck } from "react-icons/fa";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const EMAIL = "ashish@example.com"; // <-- set your real email
  const PHONE = "+91-98765-43210";    // <-- set your real phone
  const LINKEDIN = "https://www.linkedin.com/in/ashish-k-nayak";
  const GITHUB = "https://github.com/GeekStartup";

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
      navigator.clipboard.writeText(EMAIL)
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
    <SectionWrapper id="contact" title="Contact">
      {/* Buttons row: stacks on mobile, row on larger screens */}
      <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3">
        <button
          onClick={openGmailCompose}
          className="inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 text-white px-5 py-2.5 shadow hover:bg-blue-700 transition w-full sm:w-auto"
        >
          <FaEnvelope />
          Email via Gmail
        </button>

        {/* Icon-only copy button */}
        <button
          onClick={copyEmail}
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white shadow hover:bg-black transition"
          aria-label="Copy email address"
          title="Copy email"
        >
          {copied ? <FaCheck /> : <FaCopy />}
        </button>

        <a
          href={LINKEDIN}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-3 rounded-full bg-gray-200 text-gray-900 px-5 py-2.5 shadow hover:bg-gray-300 transition w-full sm:w-auto"
        >
          <FaLinkedin />
          LinkedIn
        </a>

        <a
          href={GITHUB}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-3 rounded-full bg-gray-200 text-gray-900 px-5 py-2.5 shadow hover:bg-gray-300 transition w-full sm:w-auto"
        >
          <FaGithub />
          GitHub
        </a>
      </div>

      {/* Phone row — won't wrap now */}
      <div className="mt-6 flex items-center gap-3 text-gray-800">
        <FaPhone />
        <span className="font-medium whitespace-nowrap">{PHONE}</span>
      </div>
    </SectionWrapper>
  );
}
