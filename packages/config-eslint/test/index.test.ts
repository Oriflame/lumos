import { getExtendsList, ESLintOptions } from '../src';
import { getErrors } from './utils/getErrors';

interface OptionsShape {
  filePath?: string;
}

describe('Check that eslint rules are correct', () => {
  test.each<[ESLintOptions, string, OptionsShape?]>([
    [{}, 'javascript.js', undefined],
    [
      { typescript: true, next: true },
      'typescript.ts',
      { filePath: `${process.cwd()}/packages/config-eslint/src/index.ts` },
    ],
    [{ node: true }, 'node.js', undefined],
    [{ next: true }, 'next.js', undefined],
    [{ prettier: true }, 'prettier.js', undefined],
    [
      { next: true, node: false, prettier: true, typescript: true },
      'test.js',
      { filePath: 'index.test.js' },
    ],
    [
      { next: true, node: false, prettier: true, typescript: true },
      'combo.ts',
      { filePath: `${process.cwd()}/packages/config-eslint/src/index.ts` },
    ],
  ])(
    'Config (options: %o) should work with file: %s and cliOptions: %o',
    async (options, file, cliOptions) => {
      const output = await getErrors(
        {
          extends: getExtendsList(options),
        },
        `packages/config-eslint/test/lint-files/${file}`,
        cliOptions,
      );
      expect(output[0].messages.filter(item => item.severity === 2)).toEqual([]);
      expect(output[0].errorCount).toBe(0);
    },
  );

  test.each<[ESLintOptions, string, OptionsShape | undefined, number]>([
    [{}, 'javascript.js', undefined, 1],
    [
      { typescript: true, next: true },
      'typescript.ts',
      { filePath: `${process.cwd()}/packages/config-eslint/src/index.ts` },
      2,
    ],
    [{ node: true }, 'node.js', undefined, 1],
    [{ next: true }, 'next.js', undefined, 2],
    [{ prettier: true }, 'prettier.js', undefined, 4],
    [
      { next: true, node: false, prettier: true, typescript: true },
      'test.js',
      { filePath: 'index.test.js' },
      1,
    ],
    [
      { next: true, node: false, prettier: true, typescript: true },
      'combo.ts',
      { filePath: `${process.cwd()}/packages/config-eslint/src/index.ts` },
      2,
    ],
  ])(
    'Config (options: %o) should throw error with file: %s and cliOptions: %o',
    async (options, file, cliOptions, expectedErrors) => {
      const output = await getErrors(
        {
          extends: getExtendsList(options),
        },
        `packages/config-eslint/test/lint-files/errors/${file}`,
        cliOptions,
      );

      expect(output[0].errorCount).toBe(expectedErrors);
    },
  );
});
