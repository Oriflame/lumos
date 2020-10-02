import { getConfig, getIgnoreList } from '@ori-open/config-prettier';

export = {
  ...getConfig(),
  ignore: getIgnoreList(),
};
