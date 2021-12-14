import { Path } from '@beemo/core';
import { getConfig } from '@oriflame/config-eslint';
import fs from 'fs';

import { getSettings } from '../helpers/getSettings';

const { tool } = process.beemo;

const settings = getSettings(tool);

const { future, node, nextjs, srcFolder, testsFolder, typesFolder } = settings;

const workspacesEnabled = tool.project.getWorkspaceGlobs({ relative: true }).length > 0;

let project: Path;

// Lint crashes with an OOM error when using project references,
// so just use a single file that globs everything.
if (workspacesEnabled) {
  project = Path.resolve('tsconfig.eslint.json');

  const include: Path[] = [new Path(`${typesFolder}/**/*`)];

  tool.project.getWorkspaceGlobs({ relative: true }).forEach((wsPath) => {
    include.push(
      new Path(wsPath, `${srcFolder}/**/*`),
      new Path(wsPath, `${testsFolder}/**/*`),
      new Path(wsPath, `${typesFolder}/**/*`),
    );
  });

  fs.writeFileSync(
    project.path(),
    JSON.stringify({
      extends: './tsconfig.options.json',
      include: include.map((i) => i.path()),
    }),
    'utf8',
  );
} else {
  project = Path.resolve('tsconfig.json');
}

export default getConfig({
  future,
  node,
  prettier: tool.driverRegistry.isRegistered('prettier'),
  typescript: tool.driverRegistry.isRegistered('typescript'),
  nextjs,
});
