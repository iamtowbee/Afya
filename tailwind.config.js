/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#8842F0",
        "secondary": "#E7D9FC",
        "dark": "#1C1B1F",
      },
      backgroundImage: {
        'footer-bg': "url('')"
      },
    },
    fontFamily: {
      "Work-Sans": ["Work Sans", "sans-serif"],
    },
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    }
  },
  plugins: [],
}

