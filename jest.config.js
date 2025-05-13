module.exports = {
  // Root directory for tests
  rootDir: '.',
  
  // File extensions to test
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  
  // Test match patterns
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],
  
  // Test environment
  testEnvironment: 'node',
  
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
  
  // Verbose reporting
  verbose: true
};