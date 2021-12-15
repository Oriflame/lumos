import type { BeemoProcess } from '@beemo/core';

declare const __DEV__: boolean;

declare interface BeemoSettings {
  // Enable TypeScript decorators
  decorators?: boolean;
  // Enable ECMAScript modules
  esm?: boolean;
  // Is a Node.js project
  node?: boolean;
  // Enable Jest projects
  projects?: boolean;
  // Support React
  react?: boolean | 'automatic' | 'classic';
}

declare global {
  namespace NodeJS {
    interface Process {
      lumos: BeemoProcess;
    }
  }
}
