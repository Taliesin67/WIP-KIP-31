#!/bin/bash
# Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
apt-get install -y nodejs
npm install -g npm@latest
npm install -g jest