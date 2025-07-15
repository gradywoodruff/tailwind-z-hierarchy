const plugin = require("tailwindcss/plugin")

const zHierarchy = function (options = []) {
  console.log("🔧 zHierarchy plugin called with options:", options)

  return plugin(function ({ addUtilities }) {
    const zIndexUtilities = options.reduce((obj, key, index) => {
      const utilityName = `.z-${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`
      const zIndexValue = index === 0 ? 1 : index * 10
      obj[utilityName] = {
        zIndex: zIndexValue
      }
      console.log(`📝 Generated utility: ${utilityName} -> z-index: ${zIndexValue}`)
      return obj
    }, {})

    console.log("🎯 Final utilities object:", zIndexUtilities)
    addUtilities(zIndexUtilities)
    console.log("✅ addUtilities called successfully")
  })
}

// Support both CommonJS and ES6 imports
module.exports = zHierarchy
module.exports.default = zHierarchy
