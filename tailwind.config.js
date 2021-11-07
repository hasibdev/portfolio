const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navy: '#1e2a3a',
        black: '#111821',
        primary: '#059669',
        'primary-dark': '#065F46'
      }
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
