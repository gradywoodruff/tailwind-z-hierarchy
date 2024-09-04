const plugin = require("tailwindcss/plugin")

const zHierarchy = function (options = []) {
  return plugin(function ({ addUtilities }) {
    const zIndexUtilities = options.reduce((obj, key, index) => {
      const utilityName = `.z-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`
      obj[utilityName] = { zIndex: index === 0 ? 1 : index * 10 }
      return obj
    }, {})

    addUtilities(zIndexUtilities, ["responsive", "hover"])
  })
}

module.exports = zHierarchy
