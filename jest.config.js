/** @type {import('jest').Config} */
const config = {
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  extensionsToTreatAsEsm: ['.jsx',],
  testEnvironment:"jsdom"
};

export default config;
