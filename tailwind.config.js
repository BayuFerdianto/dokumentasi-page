/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["index.html"],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '990px',
      // => @media (min-width: 1024px) { ... }
      'desktop': '1060px',
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
    },
    extend: {
      colors: {
        'primary': '#00756a',
        'secondary': '#333e49',
        'purple-60': '#8740be',
        'purple-70': '#4d52b1',
        'sky-60': '#00b7cd',
        'orange-60': '#ff5e16',
        'slate-60': '#f0f0fb',
        'slate-70': '#c4cfde',
        'blue-60': '#4385e0',
        'slate-sponsor': '#f2f4f5',
      },
      fontFamily: {
        'sans': ['Proxima', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}

