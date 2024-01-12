/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        purple: '#A73ED3',
        blue: '#1900ED',
        pink: '#FC3566',
      },
      small_container: {
        center: true,
        padding: '1rem',
      },
      maxWidth: {
        '1036': '1036px',
      },
    },
  },
  plugins: [],
}

