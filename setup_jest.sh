#!/bin/bash
set -e

# Ensure npm is available
if ! command -v npm &> /dev/null; then
    echo "Installing Node.js and npm..."
    curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
    apt-get update
    apt-get install -y nodejs
fi

# Initialize npm project if not already done
if [ ! -f package.json ]; then
    npm init -y
fi

# Install Jest and related dependencies
npm install --save-dev jest @jest/globals @types/jest

# Ensure package.json has correct scripts
npm pkg set scripts.test="jest" \
             scripts.test:watch="jest --watch" \
             scripts.test:coverage="jest --coverage"

# Print version to verify installation
npx jest --version