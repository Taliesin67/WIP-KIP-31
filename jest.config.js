module.exports = {
  // Indicates that we'll be using ES modules
  moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json'],
  
  // The test environment to use
  testEnvironment: 'node',
  
  // Folder for test files
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
  
  // Transform files (if using TypeScript or modern JS)
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  
  // Ignore specific paths
  testPathIgnorePatterns: ['/node_modules/'],
  
  // Verbose output
  verbose: true
};