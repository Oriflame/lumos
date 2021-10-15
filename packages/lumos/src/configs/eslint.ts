import { Path } from '@beemo/core';
import { getExtendsList, getIgnoreList } from '@oriflame/config-eslint';
import fs from 'fs';

import { getSettings } from '../helpers/getSettings';

const { tool } = process.beemo;

const settings = getSettings();
const { options } = tool.driverRegistry.get('eslint');

const { future, node, nextjs, srcFolder, testsFolder, typesFolder } = { ...settings, ...options };

const workspacesEnabled = !!tool.package.workspaces;

let project: Path;

// Lint crashes with an OOM error when using project references,
// so just use a single file that globs everything.
if (workspacesEnabled) {
  project = Path.resolve('tsconfig.eslint.json');

  const include: Path[] = [];

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
export default {
  extends: getExtendsList({
    future,
    node,
    prettier: tool.driverRegistry.isRegistered('prettier'),
    typescript: tool.driverRegistry.isRegistered('typescript'),
    nextjs,
  }),
  ignore: getIgnoreList(),
};
