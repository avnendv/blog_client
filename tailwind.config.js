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
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': ['0 35px 35px rgba(0, 0, 0, 0.25)', '0 45px 65px rgba(0, 0, 0, 0.15)'],
        'av-drop': ['0 35px 35px rgba(79, 161, 221, 0.25)', '0 45px 65px rgba(153, 1, 46, 0.15)'],
      },
      backgroundImage: {
        'av-bg-before': 'linear-gradient(180deg,rgba(17,24,31,0) 0%,#11181f 100%)',
        'av-bg-auth': 'linear-gradient(110deg,#141414 60%,#262627 40%)',
      },
    },
  },
  plugins: [],
};
