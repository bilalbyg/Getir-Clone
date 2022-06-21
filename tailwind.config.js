/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'brand-color':'#4c3398',
        'primary-brand-color':'#7849f7',
        'second-brand-color':'#5d3ebc',
        'brand-yellow':'#ffd300'
      }
    },
  },
  plugins: [],
}
