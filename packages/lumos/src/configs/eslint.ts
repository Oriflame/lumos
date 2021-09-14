import { getExtendsList, getIgnoreList } from '@oriflame/config-eslint';
import { getSettings } from '@oriflame/lumos-common';

const { tool } = process.beemo;
const { future, node, nextjs } = getSettings();

export = {
  extends: getExtendsList({
    future,
    node,
    prettier: tool.driverRegistry.isRegistered('prettier'),
    typescript: tool.driverRegistry.isRegistered('typescript'),
    nextjs,
  }),
  ignore: getIgnoreList(),
};
