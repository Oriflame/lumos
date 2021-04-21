/* eslint-disable node/no-missing-require -- TODO: solve somehow? */

const { StyleSheetTestUtils } = require('aphrodite');

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
