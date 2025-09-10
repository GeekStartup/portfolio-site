import React, { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!show) return null;

  return (
    <button
      onClick={toTop}
      className="fixed bottom-5 right-5 z-50 w-10 h-10 rounded-full bg-brand text-white shadow-lg hover:opacity-90 transition"
      aria-label="Back to top"
      title="Back to top"
    >
      ↑
    </button>
  );
}
