module.exports = {
  "babelrc": true,
  "babelrcRoots": [
    "packages/*"
  ],
  "comments": false,
  "presets": [
    [
      "@oriflame/babel-preset",
      {
        "modules": false,
        "react": true,
        "library": true,
        "graphql": false,
        "removePropTypes": false,
        "targets": {
          "node": "12.16"
        },
        "srcFolder": "src",
        "env": {}
      }
    ]
  ]
};
