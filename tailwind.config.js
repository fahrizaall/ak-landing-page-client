/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html','components/*.html','pages/*.html'],
  theme: {
    container: {
      center: true,
      padding: '24px',
    },
    extend: {
      colors: {
        primary: '#192440',
        secondary: '#00FFAD',
      }
    },
    fontFamily: {
      marvel: ['Marvel', 'sans-serif']
    }
  },
  plugins: [],
}
