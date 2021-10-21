import { Script } from '@beemo/core';
import { checkCommitFormat } from '@oriflame/conventional-changelog';
import { getPersonalAccessTokenHandler, WebApi } from 'azure-devops-node-api';

import { AzureEnv } from '../helpers/types';

const { SYSTEM_PULLREQUEST_PULLREQUESTID, SYSTEM_ACCESSTOKEN, ENDPOINT_URL_SYSTEMVSSCONNECTION } =
  process.env as unknown as AzureEnv;

async function createAzureClient(serverUrl: string, pat: string) {
  const authHandler = getPersonalAccessTokenHandler(pat);
  const webApi = new WebApi(serverUrl, authHandler);
  await webApi.connect();
  const gitApi = await webApi.getGitApi();

  return { webApi, gitApi };
}

// Primarily used within CI jobs
export default class PullRequestChecksScript extends Script {
  blueprint() {
    return {};
  }

  bootstrap() {
    this.task('Checking pull request title', this.checkForConventionalTitle);
  }

  async checkForConventionalTitle() {
    const { gitApi } = await createAzureClient(
      ENDPOINT_URL_SYSTEMVSSCONNECTION,
      SYSTEM_ACCESSTOKEN,
    );
    const prId = Number(SYSTEM_PULLREQUEST_PULLREQUESTID);

    const pullRequest = await gitApi.getPullRequestById(prId);

    if (!checkCommitFormat(pullRequest.title!)) {
      await gitApi.createThread(
        {
          comments: [
            {
              commentType: 1,
              content:
                'Pull request title requires a conventional changelog prefix. More information: https://github.com/Oriflame/conventional-changelog-tools/tree/master/packages/conventional-changelog#commit-message-format',
            },
          ],
          status: 1,
        },
        pullRequest.repository!.id!,
        prId,
      );
      throw new Error(
        'Pull request title requires a conventional changelog prefix. More information: https://github.com/Oriflame/conventional-changelog-tools/tree/master/packages/conventional-changelog#commit-message-format',
      );
    }
  }
}
