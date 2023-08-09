/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",

  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/fondo_rayas_verdes.png')"
      },
      colors: {
        'red-issd': '#E73724',
        'yellow-issd': '#FFB611'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}