import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaCopy, FaPhone, FaCheck } from "react-icons/fa";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const EMAIL = "ashish@example.com";                // <-- set real email
  const PHONE = "+91-98765-43210";                   // <-- set real phone
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

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      alert(`Email: ${EMAIL}`);
    }
  };

  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 lg:px-8 py-14 border-t mt-6"
    >
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Gmail compose */}
        <button
          onClick={openGmailCompose}
          className="flex items-center justify-center gap-3 rounded-lg bg-blue-600 text-white py-3 shadow hover:bg-blue-700 transition"
        >
          <FaEnvelope />
          Email via Gmail
        </button>

        {/* Copy email */}
        <button
          onClick={copyEmail}
          className="flex items-center justify-center gap-3 rounded-lg bg-gray-900 text-white py-3 shadow hover:bg-black transition"
        >
          {copied ? <FaCheck /> : <FaCopy />}
          {copied ? "Copied" : "Copy Email"}
        </button>

        {/* LinkedIn */}
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-3 rounded-lg bg-gray-200 text-gray-900 py-3 shadow hover:bg-gray-300 transition"
        >
          <FaLinkedin />
          LinkedIn
        </a>

        {/* GitHub */}
        <a
          href={GITHUB}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-3 rounded-lg bg-gray-200 text-gray-900 py-3 shadow hover:bg-gray-300 transition"
        >
          <FaGithub />
          GitHub
        </a>
      </div>

      {/* Phone row */}
      <div className="mt-6 flex items-center gap-3 text-gray-800">
        <FaPhone />
        <span className="font-medium">{PHONE}</span>
      </div>
    </section>
  );
}
