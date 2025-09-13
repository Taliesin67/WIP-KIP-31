#!/bin/bash
set -e

# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
apt-get install -y nodejs

# Verify installations
node --version
npm --version

# Install Jest globally and locally
npm install -g jest
npm install --save-dev jest

# Run tests
npm test