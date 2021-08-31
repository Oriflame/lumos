const loader = require('graphql-tag/loader');

exports.process = function process(src) {
  // eslint-disable-next-line no-empty-function -- needed
  return loader.call({ cacheable() {} }, src);
};
