import { Script } from '@beemo/core';
import { ExecaReturnValue } from 'execa';

import { LERNA_VERSION_ARGS } from '../constants';

// Primarily used within CI jobs
export default class AutoReleaseScript extends Script {
  name = '@oriflame/lumos-autorelease-script';
  blueprint() {
    return {};
  }

  async execute() {
    await this.setGitEnvVars();
    await this.versionPackages();
    await this.publishPackages();
  }

  async setGitEnvVars() {
    const { env } = process;
    let name = '';
    let email = '';

    try {
      const gitName = await this.executeCommand('git', ['config', '--get', 'user.name']);

      if (gitName.stdout) {
        name = gitName.stdout;
      }

      const gitEmail = await this.executeCommand('git', ['config', '--get', 'user.email']);

      if (gitEmail.stdout) {
        email = gitEmail.stdout;
      }
    } catch (error: unknown) {
      name = env.GITHUB_USER ?? 'Lumos Bot';
      email = env.GITHUB_EMAIL ?? 'lumos-ci-bot@lumos.com';
    }

    Object.assign(process.env, {
      GIT_AUTHOR_NAME: name,
      GIT_AUTHOR_EMAIL: email,
      GIT_COMMITTER_NAME: name,
      GIT_COMMITTER_EMAIL: email,
      GIT_ASKPASS: 'echo',
      GIT_TERMINAL_PROMPT: '0',
      // Required by Lerna
      GH_TOKEN: env.GH_TOKEN ?? env.GITHUB_TOKEN,
    });
  }

  // https://github.com/lerna/lerna/tree/master/commands/version#readme
  async versionPackages() {
    return this.handleCommand(
      this.executeCommand('lerna', LERNA_VERSION_ARGS, {
        extendEnv: true,
        preferLocal: true,
      }),
    );
  }

  // https://github.com/lerna/lerna/tree/master/commands/publish#readme
  async publishPackages() {
    return this.handleCommand(
      this.executeCommand(
        'lerna',
        [
          'publish',
          'from-git',
          '--yes',
          // Run pre and post scripts in each package if available
          '--require-scripts',
        ],
        {
          extendEnv: true,
          preferLocal: true,
        },
      ),
    );
  }

  async handleCommand(promise: Promise<ExecaReturnValue>): Promise<ExecaReturnValue> {
    return promise
      .then((response) => {
        const out = response.stdout.trim();

        if (out) {
          this.tool.msg(out);
        }

        return response;
      })
      .catch((error: { stderr: string }) => {
        this.tool.debug(error.stderr);

        throw error as unknown;
      });
  }
}
