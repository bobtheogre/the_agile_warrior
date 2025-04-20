/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(51, 167, 181)', // Pulse Teal Blue
        secondary: '#fcb900',         // Pulse Gold
      },
    },
  },
  plugins: [],
};
