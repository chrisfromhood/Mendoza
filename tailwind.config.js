module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    backgroundImage: {
      'usa-map': "url(../img/USA.svg);"
    },
    fontFamily: {
      baskervville: ['Baskervville', 'sans-serif'],
      helvetica: ['helvetica', 'sans-serif'],
      helveticaThin: ['helveticaThin', 'sans-serif'],
      helveticaBold: ['helveticaBold', 'sans-serif'],
    },

    extend: {},
    screens: {
      'xl': { 'max': '1336px' },
      // => @media (max-width: 1320px) { ... }

      'lg': { 'max': '1312px' },
      // => @media (max-width: 1200px) { ... }

      'md': { 'max': '904px' },
      // => @media (max-width: 944px) { ... }

      'tablet': { 'max': '850px' },
      // => @media (max-width: 850px) { ... }

      'ipad': { 'max': '704px' },
      // => @media (max-width: 704px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }

      'mob': { 'max': '544px' },
      // => @media (max-width: 544px) { ... }
    }
  },
  plugins: [],
}
