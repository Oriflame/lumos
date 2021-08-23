import { Path } from '@beemo/core';
import { IGNORE_PATHS } from '@oriflame/lumos-common';

export interface ESLintOptions {
  future?: boolean;
  node?: boolean;
  typescript?: boolean;
  nextjs?: boolean;
  prettier?: boolean;
}

function fromHere(filePath: string): string {
  return `./${new Path(process.cwd())
    .relativeTo(new Path(__dirname, '../lib', filePath).resolve())
    .toString()}`;
}

export function getExtendsList({
  future = false,
  node = false,
  typescript = false,
  nextjs = false,
  prettier = false,
}: ESLintOptions): string[] {
  const paths = [fromHere('./presets/base')];

  if (future) {
    paths.push(fromHere('./presets/future'));
  }

  if (node) {
    paths.push(fromHere('./presets/node'));
  }

  if (typescript) {
    paths.push(fromHere('./presets/typescript'));
  }

  if (nextjs) {
    paths.push(fromHere('./presets/nextjs'));
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
