#!/bin/bash
set -e

# Ensure Node.js and npm are installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Installing..."
    curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
    apt-get update
    apt-get install -y nodejs
fi

# Install dependencies
npm install

# Run tests
npm test