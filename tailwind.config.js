module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme('colors'),
        'test': '#FD151B',
        '1': '#f24333',
        '2': '#f4b9b8',
      }),
      colors: {
        'test': '#FD151B',
        '1': '#f24333',
        '2': '#f4b9b8',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
