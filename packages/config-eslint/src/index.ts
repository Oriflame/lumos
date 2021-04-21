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
  const paths = [
    'eslint-config-airbnb',
    fromHere('./rules/eslint'),
    fromHere('./rules/eslint-comments'),
    fromHere('./rules/promise'),
    fromHere('./rules/import'),
    fromHere('./rules/react'),
    fromHere('./rules/a11y'),
  ];

  if (next) {
    paths.push(fromHere('./rules/unicorn'));
  }

  if (node) {
    paths.push(fromHere('./rules/node'));
  }

  if (typescript) {
    paths.push(fromHere('./rules/typescript'));
  }

  paths.push(fromHere('./rules/jest'), fromHere('./rules/testing-library'));

  if (prettier) {
    paths.push(fromHere('./rules/prettier'));
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
