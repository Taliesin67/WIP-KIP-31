#!/bin/bash
# Ensure Node.js and npm are installed
curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
apt-get install -y nodejs npm

# Install Jest and related dependencies
npm install --save-dev jest @babel/core @babel/preset-env babel-jest @types/jest