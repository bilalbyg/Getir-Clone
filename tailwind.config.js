/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: this.theme({
        'brandColor':'#5d3ebc'
      })
    },
  },
  plugins: [],
}
