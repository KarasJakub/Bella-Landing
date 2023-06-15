/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Montserrat"', "sans-serif"],
        secondary: ['"Fira Sans"', "sans-serif"],
        detail: ['"Alegreya Sans"', "sans-serif"]
      }
    },
    colors: {
      dark: "#0B0F13",
      primaryRed: "#FD0111",
      textGrey: "#BBBBBB",
      cardPrimary: "#212529",
      cardSecondary: "#1C1E22"
    },
    gradientColorStops: {
      "green-lime": "#38b938",
      "green-lime-light": "#96d726",
      blue: "#158BFE",
      "blue-light": "#07B7FF",
      purple: "#7E16D7",
      "purple-light": "#A547F4",
      red: "#FF0D62",
      "red-light": "#FB613D",
      pink: "#BA65D3",
      "pink-light": "#E361A8",
      yellow: "#FACA29",
      "yellow-light": "#FE6B48"
    },
    linearGradientDirections: {
      90: "90deg" // Kierunek gradientu (90 stopni)
    },
    borderRadius: {
      xl: "0.5rem"
    },
    boxShadow: {
      "top-bottom-green":
        "0px -8px 8px -6px rgba(56, 185, 56, 0.75), 0px 8px 8px -6px rgba(56, 185, 56, 0.75)"
    }
  },
  plugins: []
}
