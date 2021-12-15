import fs from 'fs';
import { ESLint, Linter } from 'eslint';

export function getErrors(
  config: Linter.Config<Linter.RulesRecord>,
  fileToTest: string,
  options?: Parameters<ESLint['lintText']>[1],
) {
  const CLIEngine = ESLint;

  const cli = new CLIEngine({
    baseConfig: config,
  });

  return cli.lintText(fs.readFileSync(fileToTest, 'utf8'), options);
}
