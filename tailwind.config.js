/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        gray1: "#4b4b4b",
        purple1: "#40005d",
        white1: "#ccc",
        expenseBg: "#1f1f1f",
      },
      numbers: {
        200: "50rem",
      },
    },
  },
  plugins: [],
};
