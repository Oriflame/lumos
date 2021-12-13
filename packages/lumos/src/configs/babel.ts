import { getConfig } from '@oriflame/config-babel';

import { getSettings } from '../helpers/getSettings';

const { context, tool } = process.beemo;

const settings = getSettings();
const { options } = tool.driverRegistry.get('babel');

const {
  graphql,
  library,
  node,
  react,
  env,
  emptyBabelConfig: empty,
  srcFolder,
} = { ...settings, ...options };

const config = getConfig({
  env,
  esm: !!(context.getRiskyOption('esm') || process.env.ESM),
  graphql,
  library,
  node,
  react,
  empty,
  srcFolder,
  workspaces: tool.project.getWorkspaceGlobs({ relative: true }),
});

export default config;
