/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2F9A5D",
        primaryLight: "#48B074",
        primaryDark: "#438860",
        yellow: "#F9EC16",
      },
      fill: {
        colors: {
          primary: "#48B074",
          yellow: "#F9EC16",
          white: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
