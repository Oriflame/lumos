import { getConfig } from '@oriflame/config-typescript';

import { getSettings } from '../helpers/getSettings';

const { tool } = process.beemo;
const settings = getSettings();
const { options } = tool.driverRegistry.get('typescript');

const { react, library, future, allowJs, skipLibCheck, srcFolder } = { ...settings, ...options };
const usingWorkspaces = tool.project.getWorkspaceGlobs({ relative: true }).length > 0;

export default getConfig({
  library,
  future,
  react,
  srcFolder,
  allowJs,
  skipLibCheck,
  workspaces: usingWorkspaces,
});
