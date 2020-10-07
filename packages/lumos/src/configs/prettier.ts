import { getConfig, getIgnoreList } from '@oriflame/config-prettier';

export = {
  ...getConfig(),
  ignore: getIgnoreList(),
};
