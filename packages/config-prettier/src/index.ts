import { PrettierConfig } from '@beemo/driver-prettier';
import { IGNORE_PATHS } from '@oriflame/lumos-common';

export type { PrettierConfig };
function getIgnoreList(): string[] {
  return [
    ...IGNORE_PATHS,
    'npm-shrinkwrap.json',
    'package-lock.json',
    'tsconfig.json',
    'tsconfig.eslint.json',
    'tsconfig.options.json',
    'CHANGELOG.md',
    'jest.config.js',
    'babel.config.js',
    'webpack.config.js',
  ];
}

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
    bracketSameLine: false,
    arrowParens: 'always',
    requirePragma: false,
    proseWrap: 'always',
    ignore: getIgnoreList(),
  };
}
