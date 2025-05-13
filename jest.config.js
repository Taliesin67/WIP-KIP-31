/** @type {import('jest').Config} */
module.exports = {
  // Root directory for tests
  rootDir: '.',

  // Test environment
  testEnvironment: 'node',
  
  // File extensions to test
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  
  // Test match patterns
  testMatch: [
    '**/tests/**/*.test.js',
    '**/tests/**/*.spec.js'
  ],
  
  // Coverage configuration
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  
  // Ignore specific paths
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  
  // Transform configuration
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },

  // Verbose output for better debugging
  verbose: true
};