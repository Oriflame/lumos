import { getConfig } from '@oriflame/config-jest';

import { getSettings } from '../helpers/getSettings';

const { tool } = process.beemo;

const settings = getSettings();
const { options } = tool.driverRegistry.get('eslint');

const { coverage, graphql, react, srcFolder, testsFolder, node } = { ...settings, ...options };

const workspacesEnabled = !!tool.package.workspaces;

export = getConfig({
  srcFolder,
  testsFolder,
  graphql,
  react,
  node,
  threshold: coverage,
  workspaces: workspacesEnabled ? tool.project.getWorkspaceGlobs({ relative: true }) : undefined,
});
