module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    letterSpacing: {
      'widest-extra': '.25em',
    },
    extend: {
      textColor: ['hover'],
      textColor: {
        primary: '#f0b83d',
        'selective-yellow': '#FFB800',
        'white-85': 'rgba(255, 255, 255, 0.85)',
      },
      colors: {
        yellow: '#f0b83d',
        'white-85': 'rgba(255, 255, 255, 0.85)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
