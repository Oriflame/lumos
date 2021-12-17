import { getConfig } from '@oriflame/config-jest';

import { getSettings } from '../helpers/getSettings';

const { tool } = process.lumos || process.beemo;

const settings = getSettings(tool, 'jest');

const { coverage, graphql, react, srcFolder, testsFolder, node } = settings;

const workspacesEnabled = !!tool.package.workspaces;

const config = getConfig({
  srcFolder,
  testsFolder,
  graphql,
  react,
  node,
  threshold: coverage,
  workspaces: workspacesEnabled ? tool.project.getWorkspaceGlobs({ relative: true }) : undefined,
});

export default config;
