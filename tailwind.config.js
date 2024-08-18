/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#D20062',
        'Secondary':'#D6589F',
        'Tertiary':'#D895DA',
        'Fourtiary':'#C4E4FF'
      }
    },
  },
  plugins: [],
}