import { ExecaReturnValue } from 'execa';

import { LERNA_VERSION_ARGS } from '../constants';
import AutoReleaseScript from './AutoRelease';

export default class GraduateScript extends AutoReleaseScript {
  name = '@oriflame/lumos-graduate';

  async execute() {}

  async versionPackages(): Promise<ExecaReturnValue> {
    return this.handleCommand(
      this.executeCommand('lerna', [
        ...LERNA_VERSION_ARGS,
        // Graduate pre-release versioned packages to stable versions
        '--conventional-graduate',
      ]),
    );
  }
}
