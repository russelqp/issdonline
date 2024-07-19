/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js,pug}",
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
      },
      gridTemplateRows:{
        '3':'repeat (3, 1fr)'
      }
    },
  },
  screens: {
    'xsm': '480px',
    // => @media (min-width: 640px) { ... }

    'xxsm': '320px',
    // => @media (min-width: 1024px) { ... }

    'desktop': '1280px',
    // => @media (min-width: 1280px) { ... }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
