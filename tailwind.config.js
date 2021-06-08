const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: {
        light: "#01b3e4",
        DEFAULT: "#01b3e4",
        dark: "#032541",
      },
      green: {
        lighter: "#c0fed0",
        light: "#1ed5aa",
        DEFAULT: "#ff49db",
        dark: "#ff16d1",
      },
      grey: {
        dark: "#c8c8c8",
        DEFAULT: "#e3e3e3",
        light: "#e3e3e3",
      },
      white: colors.white,
      black: colors.black
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
