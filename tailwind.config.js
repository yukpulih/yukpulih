/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
  },
  plugins: [],
};
