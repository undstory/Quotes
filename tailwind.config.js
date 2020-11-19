module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    container: {
      center: true
    },
    screens: {
      // 'ssm': {'max': '320px'},
      // 'sm': {'min': 'px', 'max': '767px'},
      // 'md': {'min': '768px', 'max': '1023px'},
      // 'lg': {'min': '1024px', 'max': '1279px'},
      // 'xl': {'min': '1280px', 'max': '1535px'},
      // '2xl': {'min': '1536px'},

        'ssm': {'max': '320px'},
        'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
    },
    extend: {},
  },
  variants: {},
  plugins: [],
}
