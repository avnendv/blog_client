/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'av-dark': '#181A2A',
        'av-primary': '#4B6BFB',
        'av-primary-light': '#4b6bfb0d',
        'av-gray': '#E8E8EA',
        'av-gray-dark': '#242535',
        'av-text-gray': '#97989F',
      },
      backgroundImage: {
        'av-bg-before': 'linear-gradient(180deg,rgba(17,24,31,0) 0%,#11181f 100%)',
      },
    },
  },
  plugins: [],
};
