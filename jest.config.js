/** @type {import('jest').Config} */
export default {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // Enable ESM support
  extensionsToTreatAsEsm: ['.js'],
  
  // Transform configuration for ESM
  transform: {
    '^.+\\.js$': 'babel-jest',
  },

  // Module name mapper for ESM
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // A list of paths to directories that Jest should use to search for files in
  roots: [
    '<rootDir>/tests',
    '<rootDir>/src'
  ],

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],

  // Indicates whether each individual test should be reported during the run
  verbose: true
};