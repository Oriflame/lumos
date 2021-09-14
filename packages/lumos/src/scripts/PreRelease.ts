import { ExecaReturnValue } from 'execa';

import AutoReleaseScript from './AutoRelease';

export default class PreReleaseScript extends AutoReleaseScript {
  name = '@oriflame/lumos-pre-release';
  async execute() {
    await this.versionPackages();
    await this.publishPackages();
  }

  async versionPackages(): Promise<ExecaReturnValue> {
    return this.handleCommand(
      this.executeCommand('lerna', [
        'version',
        // Use the Beemo conventional commit preset
        '--conventional-commits',
        '--changelog-preset',
        '@oriflame/conventional-changelog',
        // Push changes to git
        '--push',
        // Alter commit message to skip CI
        '--message',
        'Pre-release [ci skip]',
      ]),
    );
  }
}
