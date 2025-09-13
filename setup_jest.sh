#!/bin/bash
set -e

# Ensure Node.js and npm are installed
if ! command -v node &> /dev/null; then
    echo "Installing Node.js and npm..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get update
    apt-get install -y nodejs
fi

# Create package.json if it doesn't exist
if [ ! -f package.json ]; then
    npm init -y
fi

# Install Jest and related dependencies
npm install --save-dev jest @types/jest
npm pkg set scripts.test="jest"
npm pkg set scripts.test:watch="jest --watch"
npm pkg set scripts.test:coverage="jest --coverage"

# Create Jest configuration
cat << EOT > jest.config.js
/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  roots: ['<rootDir>/tests', '<rootDir>/src'],
  testMatch: ['**/?(*.)+(spec|test).[tj]s'],
  transform: {},
  moduleFileExtensions: ['js', 'json', 'node']
};
EOT

echo "Jest setup complete!"
