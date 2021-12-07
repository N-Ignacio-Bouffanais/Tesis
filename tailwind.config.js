const colors = require("tailwindcss/colors");

module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fuchsia: colors.fuchsia,
        indigo: colors.indigo,
      },
      tableLayout: ["hover", "focus"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
