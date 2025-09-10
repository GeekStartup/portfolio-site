import React, { useEffect, useRef, useState } from "react";

const links = [
  { name: "Home", id: "hero" },
  { name: "About", id: "about" },
  { name: "Work History", id: "work" },
  { name: "Skills", id: "skills" },
  { name: "Education", id: "education" },
  { name: "Certifications", id: "certifications" },
  { name: "Languages", id: "languages" },
  { name: "Interests", id: "interests" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const navRef = useRef(null);
  const clickingRef = useRef(false);

  // theme init
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initial = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(initial);
    document.documentElement.classList.toggle("dark", initial);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  // mid-screen "last section passed" logic
  useEffect(() => {
    const handleScroll = () => {
      if (clickingRef.current) return; // during programmatic scroll from click

      const navH = navRef.current ? navRef.current.offsetHeight : 64;

      // Anchor ~35% down the viewport, but never above the navbar
      const anchor =
        window.scrollY + Math.max(window.innerHeight * 0.35, navH + 8);

      // At very top, force Home
      if (window.scrollY <= 2) {
        setActive("hero");
        return;
      }

      // Determine the last section whose top is <= anchor
      let current = links[0].id;
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (!el) continue;
        const top = el.offsetTop; // we already accounted for navbar in anchor
        if (anchor >= top - 1) current = l.id;
      }

      // True bottom-of-page guard: force last item
      const doc = document.documentElement;
      const scrollBottom = window.scrollY + window.innerHeight;
      const scrollHeight = Math.max(
        doc.scrollHeight,
        doc.offsetHeight,
        doc.clientHeight,
        document.body ? document.body.scrollHeight : 0
      );
      if (scrollBottom >= scrollHeight - 1) {
        current = links[links.length - 1].id;
      }

      setActive((prev) => (prev === current ? prev : current));
    };

    handleScroll(); // initial sync
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // click: smooth scroll to an exact offset + immediate highlight
  const onNavClick = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;

    const navH = navRef.current ? navRef.current.offsetHeight : 64;
    // Scroll target: element top minus a small cushion under navbar
    const targetTop = Math.max(el.offsetTop - navH - 6, 0);

    clickingRef.current = true;
    setActive(id);
    setOpen(false);

    window.scrollTo({ top: targetTop, behavior: "smooth" });

    setTimeout(() => {
      clickingRef.current = false;
    }, 450);
  };

  return (
    <nav ref={navRef} className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/80 backdrop-blur shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#hero" onClick={onNavClick("hero")} className="font-bold text-xl tracking-tight text-gray-900 dark:text-gray-100">
          <span className="text-brand">Ashish</span> Nayak
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={onNavClick(l.id)}
                className={`transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand rounded ${
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
          <button
            aria-label="Toggle menu"
            className="text-2xl text-gray-800 dark:text-gray-100"
            onClick={() => setOpen((s) => !s)}
          >
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
                  onClick={onNavClick(l.id)}
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
