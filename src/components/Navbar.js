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

  useEffect(() => {
    // Smooth, accurate section detection
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      {
        // start highlighting a bit before the section hits middle of screen
        root: null,
        rootMargin: "0px 0px -60% 0px",
        threshold: 0.1,
      }
    );

    links.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#hero" className="font-bold text-xl tracking-tight">
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
                    : "text-gray-800 hover:text-brand"
                }`}
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          className="md:hidden text-2xl"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <ul className="max-w-6xl mx-auto px-6 py-2 flex flex-col">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`block py-2 transition ${
                    active === l.id
                      ? "text-brand font-semibold"
                      : "text-gray-800 hover:text-brand"
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
