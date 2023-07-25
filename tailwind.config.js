/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/fondo_rayas_verdes.png')"
      }
    },
  },
  plugins: [],
}