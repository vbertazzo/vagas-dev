module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: theme => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme('colors.indigo.800')
            },
            h2: {
              color: theme('colors.indigo.800')
            },
            h3: {
              color: theme('colors.indigo.800')
            },
            h4: {
              color: theme('colors.indigo.800')
            }
          }
        }
      })
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      ringColor: ['group-focus'],
      ringWidth: ['group-focus'],
      ringOffsetWidth: ['group-focus'],
      ringOffsetColor: ['group-focus'],
      backgroundColor: ['focus-visible']
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
}
