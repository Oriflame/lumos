const loader = require('graphql-tag/loader');

exports.process = function process(src) {
  return {
    // eslint-disable-next-line no-empty-function -- needed
    code: loader.call({ cacheable() {} }, src),
  };
};
