/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'default': '#D1F366',
        'secondary': '#141627',
        'primary': '#D0D4E7' 
      }
    },
  },
  plugins: [],
}
