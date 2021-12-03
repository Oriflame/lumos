/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { execa, execaSync } from 'execa';

export async function getLastTag(): Promise<string> {
  const output = await execa('git', ['describe', '--tags', '--abbrev=0', '@^']);

  return output.stdout.trim();
}

export async function getCommitsSince(since: string): Promise<string[]> {
  const response = await execa('git', ['log', '--oneline', `${since}..@`]);

  return response.stdout.trim().split('\n');
}

let commitHash = '';

export function getCommitHash(): string {
  if (commitHash) {
    return commitHash;
  }

  try {
    commitHash = execaSync('git', ['rev-parse', '--short=7', 'HEAD']).stdout;
  } catch (error: unknown) {
    // Ignore error
  }

  return commitHash;
}
