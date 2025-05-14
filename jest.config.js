module.exports = {
  // Indicates that the test environment is Node.js
  testEnvironment: 'node',
  
  // File extensions Jest will process
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  
  // Test match patterns
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  
  // Coverage configuration
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  
  // Minimum coverage thresholds
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },

  // Verbose output
  verbose: true,

  // Clear mocks before each test
  clearMocks: true,

  // Automatically reset mocks before each test
  resetMocks: true
};