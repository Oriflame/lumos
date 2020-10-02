import { PrettierConfig } from '@beemo/driver-prettier';
import { IGNORE_PATHS } from '@ori-open/lumos-common';

export function getConfig(): PrettierConfig {
  return {
    printWidth: 100,
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: true,
    quoteProps: 'as-needed',
    jsxSingleQuote: false,
    trailingComma: 'all',
    bracketSpacing: true,
    jsxBracketSameLine: false,
    arrowParens: 'avoid',
    requirePragma: false,
    proseWrap: 'always',
  };
}

export function getIgnoreList(): string[] {
  return [
    ...IGNORE_PATHS,
    'lerna.json',
    'npm-shrinkwrap.json',
    'package.json',
    'package-lock.json',
    'tsconfig.json',
    'tsconfig.eslint.json',
    'tsconfig.options.json',
    'azure-pipelines.yml',
    'CHANGELOG.md',
    'jest.config.js',
    'babel.config.js',
    'webpack.config.js',
  ];
}
