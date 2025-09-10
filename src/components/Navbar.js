import React, { useEffect, useState } from "react";

const links = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Certifications", id: "certifications" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  // Active section via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { root: null, rootMargin: "0px 0px -60% 0px", threshold: 0.1 }
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Load stored theme on mount
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initial = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(initial);
    document.documentElement.classList.toggle("dark", initial);
  }, []);

  // Toggle and persist theme
  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/80 backdrop-blur shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#hero" className="font-bold text-xl tracking-tight text-gray-900 dark:text-gray-100">
          <span className="text-brand">Ashish</span> Nayak
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`transition ${
                  active === l.id
                    ? "text-brand font-semibold"
                    : "text-gray-800 dark:text-gray-200 hover:text-brand"
                }`}
              >
                {l.name}
              </a>
            </li>
          ))}
          <li>
            <button
              onClick={toggleTheme}
              className="px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {dark ? "🌙 Dark" : "☀️ Light"}
            </button>
          </li>
        </ul>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle theme"
          >
            {dark ? "🌙" : "☀️"}
          </button>
          <button aria-label="Toggle menu" className="text-2xl text-gray-800 dark:text-gray-100" onClick={() => setOpen((s) => !s)}>
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white dark:bg-gray-900">
          <ul className="max-w-6xl mx-auto px-6 py-2 flex flex-col">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`block py-2 transition ${
                    active === l.id
                      ? "text-brand font-semibold"
                      : "text-gray-800 dark:text-gray-200 hover:text-brand"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
