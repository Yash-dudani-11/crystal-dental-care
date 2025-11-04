/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Roboto', 'sans-serif'],
        comic: ['Comic Neue', 'cursive'],
        pirata:['Pirata One','system-ui']
      }
    },
  },
  plugins: [],
}
