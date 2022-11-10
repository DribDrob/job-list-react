/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '414px',
      xl: '1432px',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      proxima: ['Proxima Nova', 'sans-serif'],
    },
    colors: {
      'accent-secondary': '#38415D',
      accent: '#384564',
      white: '#ffffff',
      gray: '#878D9D',
      'gray-light': '#E6E9F2',
      'gray-dark': '#3A4562',
      // filters
      'navy-text': '#55699E',
      'navy-bgd': '#A1B1DB',
      'yellow-text': '#988B49',
      'yellow-bgd': '#FFCF00',
    },

    extend: {
      spacing: {
        // 1: '8px',
        // 2: '12px',
        '68px': '68px',
        '26px': '26px',
        '29px': '29px',
        '85px': '85px',
        '260px': '260px',
      },
      borderRadius: {
        round: '50%',
      },
    },
  },
  plugins: [],
};
