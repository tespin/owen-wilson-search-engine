/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    '*.{html,js,ejs}',
    './public/**/*.{js,ejs}',
    './views/**/*.{js,ejs}',
    './src/*.{js,ejs}',
  ],
  theme: {
    screens: {
      xs: '320px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        base: {
          light: '#ADF0E9',
          DEFAULT: '#04eed7',
          dark: '#246962',
        },
      },
    },
  },
  plugins: [],
};
