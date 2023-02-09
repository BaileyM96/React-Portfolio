/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xl': '1875px',
      'xl': '1440px',
      'lg': '960px',
      'md': '768px',
    },
    extend: {},
  },
  plugins: [],
}
