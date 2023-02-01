/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@vechaiui/core")],
};
