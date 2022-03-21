import { Path } from '@beemo/core';
import { getConfig } from '@oriflame/config-eslint';
import fs from 'fs';
import prettier from 'prettier';

import { getSettings } from '../helpers/getSettings';
import prettierConfig from './prettier';

const { tool } = process.lumos || process.beemo;

const settings = getSettings(tool, 'eslint');

const { future, node, nextjs, srcFolder, testsFolder, typesFolder } = settings;

const workspacesEnabled = tool.project.getWorkspaceGlobs({ relative: true }).length > 0;

// Lint crashes with an OOM error when using project references,
// so just use a single file that globs everything.
if (workspacesEnabled) {
  const project = Path.resolve('tsconfig.eslint.json');

  const include: Path[] = [new Path(`${typesFolder}/**/*`)];

  tool.project.getWorkspaceGlobs({ relative: true }).forEach((wsPath) => {
    include.push(
      new Path(wsPath, `${srcFolder}/**/*`),
      new Path(wsPath, `${testsFolder}/**/*`),
      new Path(wsPath, `${typesFolder}/**/*`),
    );
  });

  const config = JSON.stringify({
    extends: './tsconfig.options.json',
    include: include.map((i) => i.path()),
  });

  fs.writeFileSync(
    project.path(),
    prettier.format(config, {
      ...prettierConfig,
      filepath: 'tsconfig.eslint.json',
    }),
    'utf8',
  );
} else {
  const project = Path.resolve('tsconfig.eslint.json');

  const include = [
    new Path(`${srcFolder}/**/*`).path(),
    new Path(`${testsFolder}/**/*`).path(),
    new Path(`${typesFolder}/**/*`).path(),
  ];

  const config = JSON.stringify({
    extends: './tsconfig.json',
    include,
  });

  fs.writeFileSync(
    project.path(),
    prettier.format(config, {
      ...prettierConfig,
      filepath: 'tsconfig.eslint.json',
    }),
    'utf8',
  );
}

export default getConfig({
  future,
  node,
  prettier: tool.driverRegistry.isRegistered('prettier'),
  typescript: tool.driverRegistry.isRegistered('typescript'),
  nextjs,
});
