#!/bin/bash
set -e

# Ensure npm packages are installed
npm install

# Run Jest tests with verbose output
npx jest --verbose