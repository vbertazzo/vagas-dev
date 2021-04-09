module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      ringColor: ['focus-visible', 'focus'],
      ringWidth: ['focus-visible'],
      backgroundColor: ['focus-visible']
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
