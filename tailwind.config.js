/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        success: "#5aac44",
        hover: "#63c449",
        blue: "#0052CC",
        hoverBlue: "#0F66E0",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
