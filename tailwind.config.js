/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#191b1c",
        secondary: "#252729",
        'secondary-light': "#2c2d2f"
      },
    },
    plugins: [],
  }
}