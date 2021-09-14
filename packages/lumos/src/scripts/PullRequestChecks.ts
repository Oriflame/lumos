import { Script } from '@beemo/core';
import { Octokit } from '@octokit/rest';
import { checkCommitFormat } from '@oriflame/conventional-changelog';
import path from 'path';

import { createGitHubClient } from '../helpers/createGitHubClient';

const { TRAVIS_PULL_REQUEST, TRAVIS_PULL_REQUEST_SLUG } = process.env;

// Primarily used within CI jobs
export default class PullRequestChecksScript extends Script {
  name = '@oriflame/lumos-pull-request-check';
  owner!: string;

  repo!: string;

  client!: Octokit;

  blueprint() {
    return {};
  }

  async execute() {
    if (TRAVIS_PULL_REQUEST === 'false') {
      return;
    }

    const [owner, repo] = TRAVIS_PULL_REQUEST_SLUG!.split('/');

    this.owner = owner;
    this.repo = repo;
    this.client = createGitHubClient();

    await this.checkForInvalidLocks();
    await this.checkForConventionalTitle();
  }

  async checkForInvalidLocks() {
    const { data: files } = await this.client.pulls.listFiles({
      owner: this.owner,
      repo: this.repo,
      pull_number: Number(TRAVIS_PULL_REQUEST),
    });

    const fileNames = new Set(files.map((file) => path.basename(file.filename)));
    const hasPackageChanges = fileNames.has('package.json');

    // this.tool.log('Changed files: %s', Array.from(fileNames).join(', '));

    if (fileNames.has('package-lock.json') && !hasPackageChanges) {
      throw new Error('Your PR contains changes to package-lock.json, but not package.json.');
    } else if (fileNames.has('npm-shrinkwrap.json') && !hasPackageChanges) {
      throw new Error('Your PR contains changes to npm-shrinkwrap.json, but not package.json.');
    } else if (fileNames.has('yarn.lock') && !hasPackageChanges) {
      throw new Error('Your PR contains changes to yarn.lock, but not package.json.');
    }
  }

  async checkForConventionalTitle() {
    const { data: pr } = await this.client.pulls.get({
      owner: this.owner,
      repo: this.repo,
      pull_number: Number(TRAVIS_PULL_REQUEST),
    });

    // this.tool.log('PR title: %s', pr.title);

    if (!checkCommitFormat(pr.title)) {
      throw new Error(
        'Pull request title requires a conventional changelog prefix. More information: https://github.com/Oriflame/conventional-changelog-tools/tree/master/packages/conventional-changelog#commit-message-format',
      );
    }
  }
}
