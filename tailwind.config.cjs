/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Montserrat"', "sans-serif"],
        secondary: ['"Fira Sans"', "sans-serif"]
      }
    },
    colors: {
      dark: "#0B0F13",
      primaryRed: "#FD0111",
      textGrey: "5f6265"
    }
  },
  plugins: []
}
