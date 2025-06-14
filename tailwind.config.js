/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // important!
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {
    colors: {
      'library-brown': '#5D4037',
      'library-paper': '#F8F5F2',
    },
  } },
  plugins: [],
};