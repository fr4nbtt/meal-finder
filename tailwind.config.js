/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "dark-green": "#12372A",
        "medium-green": "#436850",
        "light-green": "#ADBC9F",
        cream: "#FBFADA",
        "soft-black": "#111827",
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
