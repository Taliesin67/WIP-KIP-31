/** @type {import('jest').Config} */
module.exports = {
  // Test environment
  testEnvironment: 'node',

  // Root directory for tests
  roots: ['<rootDir>/tests'],

  // File matching patterns
  testMatch: [
    '**/__tests__/**/*.js',
    '**/?(*.)+(spec|test).js'
  ],

  // Module file extensions
  moduleFileExtensions: ['js'],

  // Transform configuration (none needed for pure JS)
  transform: {},

  // Verbose output
  verbose: true,

  // Coverage configuration
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'clover'],

  // Coverage thresholds
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },

  // Clear mocks before each test
  clearMocks: true,

  // Reset module registry before each test
  resetModules: true,

  // Bail after first failure
  bail: true,

  // Maximum number of workers
  maxWorkers: '50%'
};