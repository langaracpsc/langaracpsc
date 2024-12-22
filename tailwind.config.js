/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "radial-orange-black":
          "radial-gradient(ellipse at center, rgba(241,90,34,0.2) 0%, black 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
