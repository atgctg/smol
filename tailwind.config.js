module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark': '#1F2937',
        'light': '#F9FAFB'
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