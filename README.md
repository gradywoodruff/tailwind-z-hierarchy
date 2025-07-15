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

Create a `tailwind.config.js` file:
```js
import zHierarchy from "tailwind-z-hierarchy";

export default {
  plugins: [
    zHierarchy(["main", "calendar", "calendar-active", "chat"])
  ]
}
```

Then in your CSS file:
```css
@import "tailwindcss";
@config "./tailwind.config.js";
```

### Tailwind CSS 3.x (Traditional configuration)

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
      "modal",        // z-index will be 10
      "overlay",      // z-index will be 20
      "tooltip"       // z-index will be 30
    ])
  ]
}
```

## Generated Classes

Based on the example configuration above, the plugin will generate these utility classes:

```css
.z-main { z-index: 1; }
.z-calendar { z-index: 10; }
.z-calendar-active { z-index: 20; }
.z-chat { z-index: 30; }
```

## Features

- **Consistent z-index values** across your project
- **Automatic spacing** (groups of 10) allows easy insertion of new values
- **Kebab-case conversion** (e.g., `calendarActive` becomes `z-calendar-active`)
- **Compatible with both Tailwind 3.x and 4.x**

## Migration from Tailwind 3 to 4

If you're upgrading from Tailwind 3 to 4, simply:

1. Keep your existing `tailwind.config.js` file
2. Update your CSS to use the `@config` directive:
   ```css
   @import "tailwindcss";
   @config "./tailwind.config.js";
   ```

## Example Usage in HTML

```html
<div class="z-main">Main content</div>
<div class="z-calendar">Calendar widget</div>
<div class="z-calendar-active">Active calendar overlay</div>
<div class="z-chat">Chat window</div>
```
