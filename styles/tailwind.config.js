module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark': '#1a202c',
        'light': '#f7fafc',
      },
      borderRadius: {
        'none': '0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}