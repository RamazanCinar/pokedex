/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'normal': '#CBC7BE',
        'fire': '#F66D26',
        'water': '#2074A3',
        'grass': '#6AD03D',
        'electric': '#D3BE3A',
        'ice': '#C0E7E2',
        'fighting': '#C09593',
        'poison': '#7119A8',
        'ground': '#AB9363',
        'flying': '#819CD3',
        'psychic': '#EB96AD',
        'bug': '#D8DC7E',
        'rock': '#C8CBC4',
        'ghost': '#9070A2',
        'dragon': '#AC9DDE',
        'dark': '#A59B9C',
        'steel': '#C1CBCD',
        'fairy': '#F5CCDE',
      },
    },
  },
  plugins: [],
}
