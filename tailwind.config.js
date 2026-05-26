/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#A855F7',
          dark: '#7E22CE',
        },
        accent: '#22D3EE',
      }
    },
  },
  plugins: [],
}