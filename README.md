# Tailwind Z Hierarchy Plugin

This plugin allows you to define a z-index hierarchy in your tailwind config file. This is useful for keeping your z-index values consistent across your project. The z-index values are batched in groups of 10, so you can easily add new z-index values in between the ones defined in your `zHierarchy` array.

Install with npm or yarn

```bash
npm install --save-dev tailwind-z-hierarchy
```

```bash
yarn add --dev tailwind-z-hierarchy
```

Then add the plugin to your `tailwind.config.js` file.

```js
const zHierarchy = require("tailwind-z-hierarchy");

module.exports = {
  theme: {
    // your theme configurations
  },
  plugins: [
    zHierarchy([
      "header",       // z-index will be 10
      "sidebar-blur", // z-index will be 20
      "sidebar",      // z-index will be 30
      "modal"         // z-index will be 40
    ]),
    // other plugins
  ],
}
```

The array you pass to `zHierarchy()` will be used to generate the z-index values for your project. The values will be generated in the order you pass them in. To use them in tailwind, you just add the class `z-<name>`, like `z-header` or `z-sidebar-blur`.
