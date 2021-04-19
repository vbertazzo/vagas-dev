const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme('colors.indigo.700')
            },
            h2: {
              color: theme('colors.indigo.700')
            },
            h3: {
              color: theme('colors.indigo.700')
            },
            h4: {
              color: theme('colors.indigo.700')
            }
          }
        }
      })
    }
  },
  variants: {
    extend: {
      animation: ['motion-reduce'],
      opacity: ['disabled', 'focus-visible'],
      ringColor: ['group-focus'],
      ringWidth: ['group-focus'],
      ringOffsetWidth: ['group-focus'],
      ringOffsetColor: ['group-focus'],
      backgroundColor: ['focus-visible'],
      width: ['focus'],
      height: ['focus']
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
}
