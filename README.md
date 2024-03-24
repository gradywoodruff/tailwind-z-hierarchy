# Tailwind Z Hierarchy Plugin

Install with npm or yarn

```bash
npm install --save-dev tailwind-z-hierarchy-plugin
```

```bash
yarn add --dev tailwind-z-hierarchy-plugin
```

```js
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
};
```