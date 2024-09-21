/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          500: "#0B090D",
          700: "#242027",
          800: "#151416",
          900: "#0B0B0C",
        },
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
        jet: "JetBrains Mono, sans-serif",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
  ],
};
