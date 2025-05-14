export default {
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
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  
  // Transform files
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  
  // Ignore specific paths
  testPathIgnorePatterns: ['/node_modules/'],
  
  // Verbose output
  verbose: true,

  // Use ES modules
  extensionsToTreatAsEsm: ['.js'],
  
  // Module name mapper (if needed)
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  }
};