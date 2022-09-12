/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#D1F366',
        'secondary': '#EC502C',
        'background': '#141627',
        'card-background': '#1C1F37',
        'heading-text': '#D0D4E7',
        'body-text': '#626577'
      }
    },
  },
  plugins: [],
}
// #D1F366 (Booger Buster) - used as a Primary color
// #EC502C (Flame) - used as a Secondary color
// #141627 (Eerie Black) - Used as a background color
// #1C1F37 (Yankees Blue) - used as a cards background
// #D0D4E7 (Columbia Blue) - used for heading text
// #626577 (Dark Electric Blue) - Used for body text