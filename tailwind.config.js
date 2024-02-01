/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "primary-400": "#719da3",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
