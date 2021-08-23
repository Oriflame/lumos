import { getConfig, getConfigWithProjectRefs } from '@oriflame/config-typescript';
import { getSettings } from '@oriflame/lumos-common';

const { context } = process.beemo;
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
} = getSettings();

export = context.args.referenceWorkspaces
  ? getConfigWithProjectRefs({
      node,
      react,
      library,
    })
  : getConfig({
      buildFolder: (context.args.buildFolder as string) || buildFolder,
      includeTests: !!context.args.noEmit,
      library,
      node,
      react,
      future,
      srcFolder: (context.args.srcFolder as string) || srcFolder,
      testsFolder: (context.args.testsFolder as string) || testsFolder,
      typesFolder: (context.args.typesFolder as string) || typesFolder,
      workspaces: context.workspaces,
      emitDeclarationOnly: !!context.args.emitDeclarationOnly,
      allowJs,
      skipLibCheck,
    });
