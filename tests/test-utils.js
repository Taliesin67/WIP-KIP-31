/**
 * Test utility functions for Jest testing framework
 * Provides helper methods for consistent testing across modules
 */

/**
 * Creates a mock function with optional implementation
 * @param {Function} [mockImplementation] - Optional mock implementation
 * @returns {jest.Mock} Mocked function
 */
export function createMockFunction(mockImplementation) {
  return jest.fn(mockImplementation);
}

/**
 * Generates random test data for various scenarios
 * @param {string} type - Type of test data to generate
 * @returns {*} Randomly generated test data
 */
export function generateTestData(type) {
  switch (type) {
    case 'string':
      return `test_${Math.random().toString(36).substring(7)}`;
    case 'number':
      return Math.floor(Math.random() * 1000);
    case 'boolean':
      return Math.random() > 0.5;
    case 'array':
      return Array.from({ length: Math.floor(Math.random() * 10) }, () => Math.random());
    case 'object':
      return { 
        id: Math.random().toString(36).substring(7),
        value: Math.random() 
      };
    default:
      throw new Error(`Unsupported test data type: ${type}`);
  }
}

/**
 * Simulates async operation with configurable delay
 * @param {*} value - Value to resolve
 * @param {number} [delay=100] - Delay in milliseconds
 * @returns {Promise<*>} Promise resolving to the value
 */
export function asyncSimulator(value, delay = 100) {
  return new Promise(resolve => setTimeout(() => resolve(value), delay));
}