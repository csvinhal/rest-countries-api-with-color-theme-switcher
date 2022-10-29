/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        "dark-blue-dark": "#2b3945",
        "very-dark-blue-dark": "#202c37",
        "very-dark-blue-light": "#111517",
        "dark-gray-light": "#858585",
        "very-light-gray-light": "#fafafa",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
