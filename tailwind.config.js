module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Ensure these match with .storybook/preview.js
    screens: {
      xs: "375px",
      sm: "768",
      md: "879px",
      lg: "1024px",
      xl: "1200px",
    },
    fontFamily: {
      sans: ["Arial", "sans-serif"],
      serif: ["Garamond", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
