import { getConfig } from '@oriflame/config-jest';
import { getSettings } from '@oriflame/lumos-common';

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
