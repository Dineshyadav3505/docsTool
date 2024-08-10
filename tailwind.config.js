/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        libre: ['"Libre Franklin"', 'sans-serif'],
        martel: ['"Martel"', 'serif'],
        overlock: ['"Overlock"', 'cursive'],
      },
    },
  },
  plugins: [],
}