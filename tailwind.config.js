/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "primary-300": "#ebf6f7",
        "primary-400": "#719da3",
        "primary-500": "#517175",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        slideInRight: "slideInRight 0.5s ease-out forwards",
        slideInLeft: "slideInLeft 0.5s ease-out forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
