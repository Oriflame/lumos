import type { ESLintConfig } from '@beemo/driver-eslint';
import { IGNORE_PATHS } from '@oriflame/lumos-common';

export interface ESLintOptions {
  future?: boolean;
  node?: boolean;
  typescript?: boolean;
  nextjs?: boolean;
  prettier?: boolean;
}

export function getConfig({
  future = false,
  node = false,
  typescript = false,
  nextjs = false,
  prettier = false,
}: ESLintOptions): ESLintConfig {
  const presets = ['oriflame'];

  if (future) {
    presets.push('oriflame/future');
  }

  if (node) {
    presets.push('oriflame/node');
  }

  if (typescript) {
    presets.push('oriflame/typescript');
  }

  if (nextjs) {
    presets.push('oriflame/nextjs');
  }

  if (prettier) {
    presets.push('oriflame/prettier');
  }

  return {
    root: true,
    extends: presets,
    ignore: [
      ...IGNORE_PATHS,
      'jest.config.js',
      'babel.config.js',
      'webpack.config.js',
      'build*/',
      '\\.eslintrc.js',
    ],
  };
}
