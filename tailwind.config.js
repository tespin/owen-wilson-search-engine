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
    extend: {},
  },
  plugins: [],
};
