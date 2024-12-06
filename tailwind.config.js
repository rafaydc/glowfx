/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"], // Include root HTML files as well as src folder
  theme: {
    extend: {
      colors: {
        customPurple: "#490D40", // Custom background purple color
        customPink: "#C57ED3",   // Custom pink color for text and buttons
      },
    },
  },
  plugins: [],
};
