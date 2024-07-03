'use strict';

const path = require('path');
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { Webpack } = require('@embroider/webpack');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    fingerprint: {
      enabled: true,
      prepend: '/',
    },
    'ember-cli-babel': {
      enableTypeScriptTransform: true,
    },
    babel: {
      plugins: [
        // This is needed to support the ||= and &&= operators
        require.resolve('@babel/plugin-proposal-logical-assignment-operators'),
        ...require('ember-cli-code-coverage').buildBabelPlugin({
          embroider: true,
        }),
      ],
      sourceMaps: 'inline',
    },

    sourcemaps: {
      enabled: true,
      extensions: ['js'],
    },
    // Add options here
  });

  return require('@embroider/compat').compatBuild(app, Webpack, {
    staticAddonTestSupportTrees: true,
    staticAddonTrees: true,
    staticHelpers: true,
    staticModifiers: true,
    staticComponents: true,
  });
};
