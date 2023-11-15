/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: { max: '1000px' },
      lg: { min: '1001px' },
    },
    extend: {
      fontFamily:{
        'snu-regular': ['SNUDESIGNWEEK2023-Regular'],
        'snu-alter': ['SNUDESIGNWEEK2023-Alter']
      },
    },
  },
  plugins: []
}
