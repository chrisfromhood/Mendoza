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

    extend: {
      colors: {
        darkGray: '#F7F7F7',
        grayLight: '#D88C70',
        lightOrange: '#CA7353',
        darkOrange: '#cc4a1a',
      },
    },
    screens: {
      'sm': { 'max': '360px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'mob': { 'max': '767px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'tablet': { 'max': '860px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': { 'max': '1023px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'laptop': { 'max': '1223px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': { 'max': '1459px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    }
  },
  plugins: [],
}
