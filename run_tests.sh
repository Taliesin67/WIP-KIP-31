#!/bin/bash
set -e

# Ensure npm is available
if ! command -v npm &> /dev/null; then
    echo "npm is not installed. Please install Node.js and npm."
    exit 1
fi

# Install dependencies
npm install jest @types/jest --save-dev

# Run tests
npm test