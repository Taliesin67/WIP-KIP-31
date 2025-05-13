#!/bin/bash
set -e

# Ensure we're in the right directory
cd "$(dirname "$0")"

# Check if Node.js and npm are installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js and npm."
    exit 1
fi

# Check if Jest is installed
if ! npm list jest &> /dev/null; then
    echo "🔄 Installing Jest and dependencies..."
    npm install
fi

# Run tests with coverage
echo "🧪 Running Jest Tests..."
npm test

# Check test exit code
test_result=$?

if [ $test_result -eq 0 ]; then
    echo "✅ All tests passed successfully!"
else
    echo "❌ Some tests failed. Please review the test output."
fi

exit $test_result