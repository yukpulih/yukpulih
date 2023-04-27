/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    screens: {
      xs: "375px",
      sm: "768px",
      md: "879px",
      lg: "1024px",
      xl: "1200px",
    },
    fontFamily: {
      serif: [
        "Source Serif Pro",
        "ui-serif",
        "Georgia",
        "Cambria",
        "Times New Roman",
        "Times",
        "serif",
      ],
      sans: [
        "Lato",
        "Montserrat",
        "ui-sans-serif, system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
        "sans-serif",
      ],
      button: ["Montserrat", "Lato", "sans-serif"],
    },
  },
  plugins: [],
};
