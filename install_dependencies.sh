#!/bin/bash
set -e

# Ensure Node.js and npm are installed
if ! command -v node &> /dev/null; then
    echo "Installing Node.js and npm..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get update
    apt-get install -y nodejs
fi

# Navigate to project root
cd "$(dirname "$0")"

# Install dependencies
npm install

# Verify Jest installation
npx jest --version
