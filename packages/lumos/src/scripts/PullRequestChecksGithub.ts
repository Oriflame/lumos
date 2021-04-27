import { context } from '@actions/github';
import { Script } from '@beemo/core';
import { Octokit } from '@octokit/rest';
import { checkCommitFormat } from '@oriflame/conventional-changelog';
import path from 'path';

import { createGitHubClient } from '../helpers/createGitHubClient';

const { GITHUB_REF } = process.env;

const parsePullRequestId = (githubRef: string) => {
  const result = /refs\/pull\/(\d+)\/merge/g.exec(githubRef);
  if (!result) throw new Error('Reference not found.');
  const [, pullRequestId] = result;

  return pullRequestId;
};

// Primarily used within CI jobs
export default class PullRequestChecksScript extends Script {
  owner!: string;

  repo!: string;

  client!: Octokit;

  pullRequest!: string;

  blueprint() {
    return {};
  }

  bootstrap() {
    this.pullRequest = parsePullRequestId(GITHUB_REF as string);

    if (this.pullRequest === 'false') {
      return;
    }
    const {
      repo: { owner, repo },
    } = context;

    this.owner = owner;
    this.repo = repo;
    this.client = createGitHubClient();

    this.task('Checking for invalid lock file changes', this.checkForInvalidLocks);
    this.task('Checking pull request title', this.checkForConventionalTitle);
  }

  async checkForInvalidLocks() {
    const { data: files } = await this.client.pulls.listFiles({
      owner: this.owner,
      repo: this.repo,
      pull_number: Number(this.pullRequest),
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
      pull_number: Number(this.pullRequest),
    });

    if (!checkCommitFormat(pr.title)) {
      throw new Error(
        'Pull request title requires a conventional changelog prefix. More information: https://github.com/Oriflame/conventional-changelog-tools/tree/master/packages/conventional-changelog#commit-message-format',
      );
    }
  }
}
