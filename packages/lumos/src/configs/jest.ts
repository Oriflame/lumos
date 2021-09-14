import { getConfig } from '@oriflame/config-jest';
import { getSettings } from '@oriflame/lumos-common';

const { coverage, graphql, react, srcFolder, testsFolder, node } = getSettings();

const { tool } = process.beemo;

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
