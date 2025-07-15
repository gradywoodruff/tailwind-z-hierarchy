import { PluginCreator } from 'tailwindcss/types/config';

declare module 'tailwind-z-hierarchy' {
  const zHierarchy: (options?: string[]) => PluginCreator;
  export = zHierarchy;
}
