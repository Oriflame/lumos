import { getExtendsList, ESLintOptions } from '../src';
import { getErrors } from './utils/getErrors';

interface OptionsShape {
  filePath?: string;
}

describe('Check that eslint rules are correct', () => {
  test.each<[ESLintOptions, string, OptionsShape?]>([
    [{}, 'javascript.js', undefined],
    [{ node: true }, 'node.js', undefined],
    [{ prettier: true }, 'prettier.js', undefined],
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
      expect(output[0].messages.filter((item) => item.severity === 2)).toEqual([]);
      expect(output[0].errorCount).toBe(0);
    },
  );

  test.each<[ESLintOptions, string, OptionsShape | undefined, number]>([
    [{}, 'javascript.js', undefined, 1],
    [{ node: true }, 'node.js', undefined, 1],
    [{ prettier: true }, 'prettier.js', undefined, 4],
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
