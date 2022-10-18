/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  safelist: ['tooltip-left', 'tooltip-right', 'tooltip-bottom'],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [require('daisyui')],
};
