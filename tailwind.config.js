/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        '74959B': '#74959B',
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

