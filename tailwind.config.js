module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) =>({
        ... theme('colors'),
        '1':'#FD151B',
        '2':'#F79489',
        '3':'#F24333',
        '4':'#F4B9B8',
        '5':'#FADCD9',
        '6':'#F8AFA6',
        '7':'#F9F1F0',
        '8':'#F7BEC0',
        '9':'#EF233C',
      }),
      colors: {
        '1':'#FD151B',
        '2':'#F79489',
        '3':'#F24333',
        '4':'#F4B9B8',
        '5':'#FADCD9',
        '6':'#F8AFA6',
        '7':'#F9F1F0',
        '8':'#F7BEC0',
        '9':'#EF233C',

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
