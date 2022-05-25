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
      'sm': { 'min': '360px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': { 'min': '700px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': { 'min': '1024px', 'max': '1459px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    }
  },
  plugins: [],
}
