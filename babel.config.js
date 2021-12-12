module.exports = {
  "ignore": [
    ".next/",
    "coverage/",
    "node_modules/",
    "public/",
    "esm/",
    "lib/",
    "!src/lib",
    "tmp/",
    "dist/",
    "build/",
    "__tests__",
    "__mocks__"
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    "babel-plugin-parameter-decorator",
    "babel-plugin-optimize-clsx",
    "babel-plugin-typescript-to-proptypes",
    [
      "@babel/plugin-proposal-class-properties",
      {
        "loose": true
      }
    ],
    [
      "@babel/plugin-proposal-private-methods",
      {
        "loose": true
      }
    ],
    [
      "@babel/plugin-proposal-private-property-in-object",
      {
        "loose": true
      }
    ],
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-transform-runtime"
  ],
  "presets": [
    [
      "@babel/preset-env",
      {
        "loose": true,
        "modules": "commonjs",
        "shippedProposals": false,
        "targets": {
          "node": "12.16"
        },
        "bugfixes": false
      }
    ],
    "@babel/preset-typescript"
  ]
};