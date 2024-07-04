const { defaults } = require('jest-config');

const path = require('path');

const fromRoot = (d) => path.join(__dirname, d);

module.exports = {
  projects: [
    fromRoot('apps/docs'),
    fromRoot('apps/sdk'),
    fromRoot('packages/core'),
    fromRoot('packages/another-package'),
  ],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'esbuild-jest',
  },
  coveragePathIgnorePatterns: ['/node_modules/'],
};
