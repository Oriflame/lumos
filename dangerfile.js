const {
  checkForInvalidLocks,
  checkForConventionalPrefix,
  checkForConventionalSquashCommit,
} = require('./packages/config-danger/lib/index');

checkForInvalidLocks();
checkForConventionalPrefix();
checkForConventionalSquashCommit();
