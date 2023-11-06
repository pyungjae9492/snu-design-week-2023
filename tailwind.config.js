/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: { min: '390px', max: '1200px' },
      lg: { min: '1200px', max: '1600px' }
    },
    extend: {}
  },
  plugins: []
}
