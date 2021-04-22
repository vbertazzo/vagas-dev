const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            '[class~="lead"]': { color: theme('colors.gray.700') },
            a: {
              color: theme('colors.indigo.700'),
              '&:focus': {
                color: theme('colors.indigo.700'),
                outline: 'solid 2px',
                outlineOffset: '4px'
              }
            },
            strong: { color: theme('colors.gray.700') },
            'ul > li::before': { backgroundColor: theme('colors.gray.700') },
            hr: { borderColor: theme('colors.gray.800') },
            blockquote: {
              color: theme('colors.gray.700'),
              borderLeftColor: theme('colors.gray.800')
            },
            h1: { color: theme('colors.indigo.700') },
            h2: { color: theme('colors.indigo.700') },
            h4: { color: theme('colors.indigo.700') },
            h4: { color: theme('colors.indigo.700') },
            code: { color: theme('colors.gray.700') },
            'a code': { color: theme('colors.gray.700') },
            pre: {
              color: theme('colors.gray.700'),
              backgroundColor: theme('colors.gray.800')
            },
            thead: {
              color: theme('colors.gray.700'),
              borderBottomColor: theme('colors.gray.700')
            },
            'tbody tr': { borderBottomColor: theme('colors.gray.800') }
          }
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            '[class~="lead"]': { color: theme('colors.gray.400') },
            a: {
              color: theme('colors.indigo.300'),
              '&:focus': {
                color: theme('colors.indigo.300'),
                outline: 'solid 2px',
                outlineOffset: '4px'
              }
            },
            strong: { color: theme('colors.gray.100') },
            'ul > li::before': { backgroundColor: theme('colors.gray.700') },
            hr: { borderColor: theme('colors.gray.800') },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.800')
            },
            h1: { color: theme('colors.indigo.400') },
            h2: { color: theme('colors.indigo.400') },
            h4: { color: theme('colors.indigo.400') },
            h4: { color: theme('colors.indigo.400') },
            code: { color: theme('colors.gray.100') },
            'a code': { color: theme('colors.gray.100') },
            pre: {
              color: theme('colors.gray.200'),
              backgroundColor: theme('colors.gray.800')
            },
            thead: {
              color: theme('colors.gray.100'),
              borderBottomColor: theme('colors.gray.700')
            },
            'tbody tr': { borderBottomColor: theme('colors.gray.800') }
          }
        }
      }),
      screens: {
        sm: '576px',
        md: '898px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px'
      }
    }
  },
  variants: {
    extend: {
      animation: ['motion-reduce'],
      backgroundColor: ['focus-visible'],
      height: ['focus'],
      opacity: ['disabled', 'focus-visible'],
      ringColor: ['group-focus'],
      ringWidth: ['group-focus'],
      ringOffsetWidth: ['group-focus'],
      ringOffsetColor: ['group-focus'],
      transform: ['motion-reduce'],
      typography: ['dark'],
      width: ['focus']
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
}
