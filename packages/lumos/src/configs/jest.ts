import { getConfig } from '@ori-open/config-jest';
import { getSettings } from '@ori-open/lumos-common';

const { coverage, graphql, react, srcFolder, testsFolder, node } = getSettings();

export = getConfig({
  srcFolder,
  testsFolder,
  graphql,
  react,
  node,
  threshold: coverage,
  workspaces: process.beemo.tool.getWorkspacePaths({ relative: true }),
});
