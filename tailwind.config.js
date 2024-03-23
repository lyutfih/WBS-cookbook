/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'indigo-1000': '#382C52',
        'snow': '#FFFAFA',
      },
    },
  },
  plugins: [],
}

