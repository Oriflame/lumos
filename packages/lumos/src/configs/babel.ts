import { getConfig } from '@oriflame/config-babel';
import { getSettings } from '@oriflame/lumos-common';

const { context, tool } = process.beemo;
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
} = getSettings();

export default getConfig({
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
