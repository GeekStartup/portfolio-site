import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="pt-20 py-6 bg-gray-900 text-gray-300 text-center">
      <p>© {year} Ashish K Nayak. All rights reserved.</p>
    </footer>
  );
}
