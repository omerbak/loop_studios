/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#8c8c8c",
        "very-dark-gray": "#696969",
      },
      fontFamily: {
        Alata: ["Alata", "sans-serif"],
        "Josefin-sans": ["Josefin Sans", "sans-serif"],
      },
      transitionTimingFunction: {
        elastic: "cubic-bezier(0.18,0.89,0.32,1.27)",
      },
    },
  },
  plugins: [],
};
