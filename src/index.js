const plugin = require('tailwindcss/plugin')

const zHierarchy = plugin(function({ addUtilities }, options = []) {
  const zIndexUtilities = options.reduce((obj, key, index) => {
    const utilityName = `.z-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
    obj[utilityName] = { zIndex: index + 1 };
    return obj;
  }, {});

  addUtilities(zIndexUtilities, ['responsive', 'hover']);
})

module.exports = zHierarchy;