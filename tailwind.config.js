/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        "dark-pink": "#D14A6C",
        "pink":"#E6A4B4",
        "med-pink":"#F3D7CA",
        "light-pink":"#F5EEE6",
        "coral":"#FFF8E3",
        "grey": "#3C3D37",
        "purple":"#790D57",
      },
      fontFamily: {
        "oswald":["Oswald", "sans-serif"],
        "lato":["lato", "sans-serif"]
      }
    },
  },
  plugins: [],
}
