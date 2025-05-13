module.exports = {
  // Explicitly set test environment
  testEnvironment: 'node',

  // Ensure all test files are discovered
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],

  // Verbose output for debugging
  verbose: true,

  // Coverage configuration
  collectCoverage: true,
  coverageReporter: ['text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};