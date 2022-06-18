const { spacing, fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      height: {
        500: '515px',
      },
      colors: {
        primary: 'rgb(170, 202, 78)',
        white: {
          white: 'rgb(255 255 255)',
        },
        back: {
          back: 'rgb(0 0 0)',
        },
        gray: {
          0: '#ffffff',
          100: '#fafafa',
          200: '#eaeaea',
          300: '#999999',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#333333',
          750: '#242526',
          800: '#222222',
          900: '#111111',
        },
        green: {
          100: 'rgb(191, 214, 120)',
          400: 'rgb(217 249 157)',
        },
        slate: {
          50: 'rgb(248 250 252)',
          100: 'rgb(241 245 249)',
          200: 'rgb(226 232 240)',
          250: 'rgb(203 213 225)',
          300: 'rgb(51 65 85)',
          400: 'rgb(148 163 184)',
          500: 'rgb(100 116 139)',
          700: 'rgb(51 65 85)',
          800: 'rgb(30 41 59)',
          900: 'rgb(17 24 39)',
          950: 'rgb(10, 12, 16)',
        },
        sky: {
          600: 'rgb(2 132 199)',
        },
        zinc: {
          600: 'rgb(82 82 91)',
          700: 'rgb(63 63 70)',
          800: 'rgb(39 39 42)',
          850: 'rgb(28, 30, 33)',
          900: 'rgb(24 24 27)',
        },
        stone: {
          700: 'rgb(68 64 60)',
          800: 'rgb(41 37 36)',
          900: 'rgb(28 25 23)',
        },
      },
      fontFamily: ['', ...fontFamily.sans],
      typography: (theme) => ({
        DEFAULT: {
          css: {},
        },
        dark: {
          css: {},
        },
      }),
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
}
