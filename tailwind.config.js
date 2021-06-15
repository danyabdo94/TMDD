const colors = require("tailwindcss/colors");

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
        darkest: "#666666",
        dark: "#c8c8c8",
        DEFAULT: "#e3e3e3",
        light: "#e3e3e3",
      },
      barColor: {
        green: "#21d07a",
        yellow: "#d2d531",
        emptyGreen: "#204529",
        emptyYellow: "#423d0f"
      },
      white: colors.white,
      black: colors.black,
    },
    minWidth: {
      0: "0",
      "1/5": "20%",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      "4/5": "80%",
      full: "100%",
      '80': '20rem'
    },
    minHeight: {
      0: "0",
      9: "2.25rem",
      full: "100%",
      '450': "450px",
    },
    height: {
      card: "370px",
      image: "270px",
      '450': "450px",
      full: "100%",
    },
    variants: {
      extend: {},
    },
    backgroundPosition: {
      '-r-200': 'right -200px top'
    },
    maxWidth: {
      'px-1400': '1400px'
    },
    plugins: [],
  },
};
