/** @type {import('jest').Config} */
module.exports = {
  // Test environment
  testEnvironment: 'node',
  
  // File extensions to test
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  
  // Test match patterns
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  
  // Coverage configuration
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  },
  
  // Ignore specific paths
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  
  // Transform configuration
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest'
  }
};