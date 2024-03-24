import { PluginCreator } from 'tailwindcss';

declare module 'tailwind-z-hierarchy' {
  const zHierarchy: (options: string[]) => PluginCreator;
  export = zHierarchy;
}
