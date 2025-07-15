# Tailwind Z Hierarchy Plugin

This plugin allows you to define a z-index hierarchy in your tailwind config file. This is useful for keeping your z-index values consistent across your project. The z-index values are batched in groups of 10, so you can easily add new z-index values in between the ones defined in your `zHierarchy` array.

**Compatible with Tailwind CSS 3.x and 4.x**

## Installation

Install with npm or yarn

```bash
npm install --save-dev tailwind-z-hierarchy
```

```bash
yarn add --dev tailwind-z-hierarchy
```

## Usage

### Tailwind CSS 3.x

Add the plugin to your `tailwind.config.js` file:

```js
const zHierarchy = require("tailwind-z-hierarchy");

module.exports = {
  theme: {
    // your theme configurations
  },
  plugins: [
    zHierarchy([
      "header",       // z-index will be 1
      "sidebar-blur", // z-index will be 10
      "sidebar",      // z-index will be 20
      "modal"         // z-index will be 30
    ]),
    // other plugins
  ],
}
```

### Tailwind CSS 4.x

For Tailwind 4, the configuration is the same:

```js
const zHierarchy = require("tailwind-z-hierarchy");

export default {
  plugins: [
    zHierarchy([
      "header",       // z-index will be 1
      "sidebar-blur", // z-index will be 10
      "sidebar",      // z-index will be 20
      "modal"         // z-index will be 30
    ]),
    // other plugins
  ],
}
```

## How it works

The array you pass to `zHierarchy()` will be used to generate the z-index values for your project. The values will be generated in the order you pass them in. To use them in tailwind, you just add the class `z-<name>`, like `z-header` or `z-sidebar-blur`.

## Migration from Tailwind 3 to 4

This plugin is fully compatible with both Tailwind 3 and 4. No changes are needed to your plugin configuration when upgrading Tailwind versions.

## Generated Classes

The plugin generates utility classes with the following pattern:

- First item: `z-<name>` with `z-index: 1`
- Subsequent items: `z-<name>` with `z-index: <index> * 10`

This spacing allows you to easily insert new z-index values between existing ones if needed.
