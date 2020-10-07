import { getConfig } from '@oriflame/config-babel';
import { getSettings } from '@oriflame/lumos-common';

const { context, tool } = process.beemo;
const {
  graphql,
  library,
  next,
  node,
  react,
  env,
  emptyBabelConfig: empty,
  srcFolder,
} = getSettings();

export = getConfig({
  env,
  esm: !!(context.args.esm || process.env.ESM),
  graphql,
  library,
  next,
  node,
  react,
  typescript: tool.isPluginEnabled('driver', 'typescript'),
  empty,
  srcFolder,
});
