const tailwindCustomForms = require("@tailwindcss/custom-forms");

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    variants: {
      borderStyle: ["responsive", "hover", "focus"]
    },
    borderRadius: {
      default: "0.25rem",
      md: "0.375rem",
      lg: "1rem",
      full: "9999px",
      xl: "32px",
      large: "56px"
    },
    container: {
      center: true
    },
    extend: {
      colors: {
        primary: "#FFDFBA",
        secondary: "#AB9A88",
        third: "#014593",
        backhover: "#014593"
      },
      width: {
        card: "30%"
      }
    }
  },
  variants: {},
  plugins: [tailwindCustomForms]
};
