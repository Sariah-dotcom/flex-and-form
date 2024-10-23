/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'plus': ['Plus Jakarta Sans', 'san-serif'],
      'inter': ['Inter', 'sans-serif']
    },

    colors:{
      'dark-pink': '#EB4E74',
      'purple':'#AB062E',
      'light-pink': '#FFF8E3',
      'white': '#fff',
      'black': '#000',

    },
    extend: {},
  },
  plugins: [],
}

