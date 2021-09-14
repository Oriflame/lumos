import { getConfig, getConfigWithProjectRefs } from '@oriflame/config-typescript';
import { getSettings } from '@oriflame/lumos-common';

const { context, tool } = process.beemo;
const settings = getSettings();
const { options } = tool.driverRegistry.get('typescript');

const {
  buildFolder,
  srcFolder,
  testsFolder,
  typesFolder,
  node,
  react,
  library,
  future,
  allowJs,
  skipLibCheck,
} = { ...settings, ...options };

console.log(buildFolder);
export = context.getRiskyOption('referenceWorkspaces')
  ? getConfigWithProjectRefs({
      node,
      react,
      library,
    })
  : getConfig({
      buildFolder: (context.getRiskyOption('buildFolder') as string) || buildFolder,
      includeTests: !!context.getRiskyOption('noEmit'),
      library,
      node,
      react,
      future,
      srcFolder: (context.getRiskyOption('srcFolder') as string) || srcFolder,
      testsFolder: (context.getRiskyOption('testsFolder') as string) || testsFolder,
      typesFolder: (context.getRiskyOption('typesFolder') as string) || typesFolder,
      workspaces: context.workspaces,
      emitDeclarationOnly: !!context.getRiskyOption('emitDeclarationOnly'),
      allowJs,
      skipLibCheck,
    });
