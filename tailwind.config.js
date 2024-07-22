/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        spacing: {
          '100': '28rem',
          '299': '29%'
        }
    },
  },
  plugins: [],
}

