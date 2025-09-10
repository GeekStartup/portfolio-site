/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#2563eb",
      },
      fontFamily: {
        heading: ['ui-serif','Georgia','Cambria','Times New Roman','Times','serif'],
      },
    },
  },
  plugins: [],
};
