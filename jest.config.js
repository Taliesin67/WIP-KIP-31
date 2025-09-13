export default {
  testEnvironment: 'node',
  verbose: true,
  transform: {
    '^.+\\.m?js$': 'babel-jest'
  },
  extensionsToTreatAsEsm: ['.js', '.mjs'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  collectCoverage: true,
  coverageReporters: ['text', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js']
};