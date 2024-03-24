# Tailwind Z Hierarchy Plugin

Install with npm or yarn

```bash
npm install --save-dev tailwind-z-hierarchy-plugin
```

```bash
yarn add --dev tailwind-z-hierarchy-plugin
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
      "header",
      "sidebar-bg",
      "sidebar"
    ]),
    // other plugins
  ],
}
```