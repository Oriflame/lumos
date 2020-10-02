import { Path } from '@beemo/core';
import { IGNORE_PATHS } from '@ori-open/lumos-common';

export interface ESLintOptions {
  next?: boolean;
  node?: boolean;
  prettier?: boolean;
  typescript?: boolean;
}

function fromHere(filePath: string): string {
  return `./${new Path(process.cwd()).relativeTo(
    new Path(__dirname, '../lib', filePath).resolve(),
  )}`;
}

export function getExtendsList({
  next = false,
  node = false,
  prettier = false,
  typescript = false,
}: ESLintOptions): string[] {
  const paths = [fromHere('presets/base.js')];

  // Future rules
  if (next) {
    paths.push(fromHere('presets/next.js'));
  }

  // TypeScript
  if (typescript) {
    paths.push(fromHere('presets/typescript.js'));
  }

  // Node
  if (node) {
    paths.push(fromHere('presets/node.js'));
  }

  // Testing library
  paths.push(fromHere('presets/testing-library.js'));

  // Prettier (must be last)
  if (prettier) {
    paths.push(fromHere('presets/prettier.js'));

    if (typescript) {
      paths.push('prettier/@typescript-eslint');
    }

    if (next) {
      paths.push('prettier/unicorn');
    }
  }

  return paths;
}

export function getIgnoreList(): string[] {
  return [
    ...IGNORE_PATHS,
    'jest.config.js',
    'babel.config.js',
    'webpack.config.js',
    'build*/',
    '\\.eslintrc.js',
  ];
}
