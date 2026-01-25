/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx,mjs}',
    './components/**/*.{js,ts,jsx,tsx,mdx,mjs}',
    './app/**/*.{js,ts,jsx,tsx,mdx,mjs}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
    },
  },
  plugins: [],
};