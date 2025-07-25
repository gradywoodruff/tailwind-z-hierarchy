const plugin = require("tailwindcss/plugin")

const zHierarchy = function (options = []) {
  return plugin(function ({ addUtilities }) {
    const zIndexUtilities = options.reduce((obj, key, index) => {
      const utilityName = `.z-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`
      const zIndexValue = index === 0 ? 1 : index * 10
      obj[utilityName] = {
        zIndex: zIndexValue
      }
      return obj
    }, {})

    addUtilities(zIndexUtilities)
  })
}

// Support both CommonJS and ES6 imports
module.exports = zHierarchy
module.exports.default = zHierarchy
