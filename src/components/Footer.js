import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-400">
        <p className="mb-3 sm:mb-0">
          © {new Date().getFullYear()} Ashish K Nayak. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/ashish-k-nayak"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/GeekStartup"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand transition"
          >
            GitHub
          </a>
          <a
            href="mailto:ashish@example.com"
            className="hover:text-brand transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
