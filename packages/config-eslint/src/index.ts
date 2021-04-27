import { Path } from '@beemo/core';
import { IGNORE_PATHS } from '@oriflame/lumos-common';

export interface ESLintOptions {
  next?: boolean;
  node?: boolean;
  prettier?: boolean;
  typescript?: boolean;
}

function fromHere(filePath: string): string {
  return `./${new Path(process.cwd())
    .relativeTo(new Path(__dirname, '../lib', filePath).resolve())
    .toString()}`;
}

export function getExtendsList({
  next = false,
  prettier = false,
  typescript = false,
  node = false,
}: ESLintOptions): string[] {
  const paths = [fromHere('./presets/base')];

  if (next) {
    paths.push(fromHere('./presets/next'));
  }

  if (node) {
    paths.push(fromHere('./presets/node'));
  }

  if (typescript) {
    paths.push(fromHere('./presets/typescript'));
  }

  if (prettier) {
    paths.push(fromHere('./presets/prettier'));
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
