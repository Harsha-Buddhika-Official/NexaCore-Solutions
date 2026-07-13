/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#05070d",
          900: "#0a0e1a",
          800: "#0f1420",
          700: "#161c2c",
          600: "#1e2536",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(79, 70, 229, 0.35)",
      },
    },
  },
  plugins: [],
};