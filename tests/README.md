# KIP-31 Core Modules Testing

## Overview
This directory contains Jest testing infrastructure for the KIP-31 project's core modules.

## Prerequisites
- Node.js 16.0.0 or higher
- npm or yarn

## Setup
1. Install dependencies:
   ```
   npm install
   ```

## Running Tests
- Run all tests: `npm test`
- Watch mode: `npm run test:watch`
- Generate coverage report: `npm run test:coverage`

## Testing Guidelines
- Write clear, descriptive test cases
- Cover both positive and negative scenarios
- Test edge cases and error handling
- Aim for high test coverage

## Dependencies
- Jest: Primary testing framework
- Babel: Enable modern JavaScript features
- @types/jest: TypeScript type definitions

## Troubleshooting
- Ensure all dependencies are installed
- Check Node.js version compatibility
- Verify Jest configuration in `jest.config.js`