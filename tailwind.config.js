/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Syncopate: ["Syncopate", "sans-serif"], 
        Popins : ["Poppins", "sans-serif"],
      },
      colors: {
        lightTheme:'#eee7f7',
        darkTheme:'#0b0813',
        
        limicMist:'#E6C7E6',
        softVoilet:'#A3779D',
        royalAmethyst:'#663399',
        midnightPlum:'#2E1A47'
      },
    },
  },
  plugins: [],
}

