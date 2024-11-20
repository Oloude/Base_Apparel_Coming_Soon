/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Josefin_Sans": ['"Josefin Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors : {
        "desaturatedRed" : "#ce9797",
        "softRed" : "#f96262",
        "darkRed" : "#413a3a",
        "linearFrom" : "#f8bfbf",
        "linearTo" : "#ee8c8c",
        "lineraToTwo" : "#fff5f5" 
      },
      backgroundImage : {
        "bgDesktop" : "url('src/assets/bg-pattern-desktop.svg')"
      }
    },
  },
  plugins: [],
}