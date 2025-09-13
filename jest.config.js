export default {
  // Indicates that tests are in the 'tests' directory
  testMatch: ['**/tests/**/*.test.js'],
  
  // Use node test environment
  testEnvironment: 'node',
  
  // Module resolution
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  
  // Coverage settings
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],
  collectCoverageFrom: [
    'src/**/*.js'
  ],
  
  // Transform settings for ES modules
  transform: {
    '^.+\\.js$': 'babel-jest'
  },
  
  // Treat .js files as ES modules
  extensionsToTreatAsEsm: ['.js'],
  
  // Other configurations
  verbose: true,
  
  // Bail after first failure to quickly identify issues
  bail: true,
  
  // Maximum workers to improve performance
  maxWorkers: '50%'
};