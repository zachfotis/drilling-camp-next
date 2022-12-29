/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#264653',
        secondary: '#2A9D8F',
        accent: '#E9C46A',
        warning: '#F4A261',
        error: '#E76F51',
      },
      screens: {
        mobile: { max: '650px' },
        tablet: { max: '768px' },
        laptop: { max: '1050px' },
        laptopLG: { max: '1200px' },
        desktop: { max: '1440px' },
      },
    },
  },
  plugins: [],
};
