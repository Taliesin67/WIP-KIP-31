#!/bin/bash
# Ensure npm is available
curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
apt-get install -y nodejs npm

# Install dependencies
npm install --save-dev jest