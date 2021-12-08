import { getConfig } from '@oriflame/config-babel';

import { getSettings } from '../helpers/getSettings';

const { context, tool } = process.beemo;

const settings = getSettings();
const { options } = tool.driverRegistry.get('babel');

const {
  graphql,
  library,
  future,
  node,
  react,
  env,
  emptyBabelConfig: empty,
  srcFolder,
  moduleFederationConfig,
} = { ...settings, ...options };

const config = getConfig({
  env,
  esm: !!(context.getRiskyOption('esm') || process.env.ESM),
  graphql,
  library,
  future,
  node,
  react,
  typescript: tool.driverRegistry.isRegistered('typescript'),
  empty,
  srcFolder,
  moduleFederationEnabled: Boolean(moduleFederationConfig),
});

export default config;
