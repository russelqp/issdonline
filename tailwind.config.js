/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      'sans': ['Gordita','sans-serif','ui-sans-serif', 'system-ui'],
      // 'serif': ['ui-serif', 'Georgia'],
      // 'mono': ['ui-monospace', 'SFMono-Regular'],
      // 'display': ['Oswald'],
      // 'body': ['"Open Sans"'],
    },
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