/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2E073F',
        'secondary': '#7A1CAC',
        'ternary': '#AD49E1',
        'fornary': '#EBD3F8'
      }
    },
  },
  plugins: [],
}