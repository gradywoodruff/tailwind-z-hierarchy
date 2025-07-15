# Tailwind Z Hierarchy Plugin

This plugin allows you to define a z-index hierarchy in your project. This is useful for keeping your z-index values consistent across your project. The z-index values are batched in groups of 10, so you can easily add new z-index values in between the ones defined in your `zHierarchy` array.

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

### Tailwind CSS 4.x (CSS-first configuration)

For Tailwind 4, you can use the plugin in two ways:

#### Option 1: Using @config directive (Recommended)

Create a `tailwind.config.js` file:
```js
import zHierarchy from "tailwind-z-hierarchy";

export default {
  plugins: [
    zHierarchy(["header", "sidebar-blur", "sidebar", "modal"])
  ]
}
```

Then load it in your CSS file:
```css
@import "tailwindcss";
@config "./tailwind.config.js";
```

#### Option 2: Using @plugin directive (Simple)

For basic plugin loading without configuration:
```css
@import "tailwindcss";
@plugin "tailwind-z-hierarchy";
```

**Note:** The `@plugin` directive doesn't support passing configuration options, so you would need to modify the plugin's source code to change the default hierarchy.

### Tailwind CSS 3.x (JavaScript configuration)

For Tailwind 3, add the plugin to your `tailwind.config.js` file:

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

### ES6 Import (Tailwind 3.x)

If you're using ES6 modules in your Tailwind 3 config:

```js
import zHierarchy from "tailwind-z-hierarchy";

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

The array you pass to `zHierarchy()` will be used to generate the z-index values for your project. The values will be generated in the order you pass them in. To use them in your HTML, you just add the class `z-<name>`, like `z-header` or `z-sidebar-blur`.

## Migration from Tailwind 3 to 4

When migrating from Tailwind 3 to 4, you have two options:

### Option A: Keep using JavaScript config (Recommended)

1. **Update your config file** to use ES6 exports:
   ```js
   // Before (Tailwind 3)
   module.exports = {
     plugins: [zHierarchy(["header", "sidebar", "modal"])]
   }
   
   // After (Tailwind 4)
   export default {
     plugins: [zHierarchy(["header", "sidebar", "modal"])]
   }
   ```

2. **Add @config directive** to your CSS:
   ```css
   @import "tailwindcss";
   @config "./tailwind.config.js";
   ```

### Option B: Switch to CSS-only

Remove the JavaScript config and use the `@plugin` directive, but note that you'll lose the ability to customize the hierarchy without modifying the plugin source.

## Generated Classes

The plugin generates utility classes with the following pattern:

- First item: `z-<name>` with `z-index: 1`
- Subsequent items: `z-<name>` with `z-index: <index> * 10`

This spacing allows you to easily insert new z-index values between existing ones if needed.

## Example

```html
<header class="z-header">Header content</header>
<aside class="z-sidebar">Sidebar content</aside>
<div class="z-modal">Modal content</div>
```

The generated CSS will be:
```css
.z-header { z-index: 1; }
.z-sidebar { z-index: 10; }
.z-modal { z-index: 20; }
```
