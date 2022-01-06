import { getConfig } from '@oriflame/config-typescript';

import { getSettings } from '../helpers/getSettings';

const { tool, context } = process.lumos || process.beemo;

const settings = getSettings(tool, 'typescript');

const {
  react,
  library,
  future,
  allowJs,
  skipLibCheck,
  srcFolder,
  declarationFolder,
  declarationOnly,
  typesFolder,
  testsFolder,
  buildFolder,
} = settings;

const usingWorkspaces = tool.project.getWorkspaceGlobs({ relative: true }).length > 0;

export default getConfig({
  library,
  future,
  react,
  srcFolder,
  allowJs,
  skipLibCheck,
  includeTests: !!context.getRiskyOption('noEmit'),
  typesFolder,
  declarationFolder,
  declarationOnly,
  buildFolder,
  testsFolder,
  workspaces: usingWorkspaces,
});
