import fs from 'fs';
import eslint, { ESLint } from 'eslint';

export function getErrorsConfig(
  config: ESLint.Options['baseConfig'],
  fileToTest: string,
  options?: Parameters<ESLint['lintText']>[1]
) {
  const CLIEngine = eslint.ESLint;

  const cli = new CLIEngine({
    baseConfig: config,
  });

  return cli.lintText(fs.readFileSync(fileToTest, 'utf8'), options);
}
