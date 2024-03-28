/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // Taken from the first configuration
  content: [
    "./pages/**/*.{js,jsx}", // From the first configuration
    "./components/**/*.{js,jsx}", // From the first configuration
    "./app/**/*.{js,jsx}", // From the first configuration
    "./src/**/*.{js,jsx,ts,tsx}", // Merged from both configurations
    "./index.html", // From the second configuration
  ],
  prefix: "", // Taken from the first configuration
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Existing color extensions from the first configuration
        transparent: "rgb(var(--transparent))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          // New primary color shades from the second configuration
          300: "#ebf6f7",
          400: "#719da3",
          500: "#517175",
        },
        // Additional color settings from the first configuration
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        // Further color extensions from both configurations...
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        // Merging keyframes from both configurations
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
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
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        slideInRight: "slideInRight 0.5s ease-out forwards",
        slideInLeft: "slideInLeft 0.5s ease-out forwards",
      },
      // Additional extensions can be merged here...
    },
  },
  plugins: [],
};
